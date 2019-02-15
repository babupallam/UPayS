const User = require('../models').User;
const Credentials = require('../models').Credentials;

module.exports = {
    setDemo(req, res) {
        var demoData = [
            { "customerName": "A", "balance": 2000, "address": {"planet": "EARTH","latitude": "28.476920","longitude":"-82.538750"} },
            { "customerName": "B", "balance": 2000, "address": {"planet": "EARTH","latitude": "28.476921","longitude":"-82.538751"} },
            { "customerName": "C", "balance": 2000, "address": {"planet": "EARTH","latitude": "28.476922","longitude":"-82.538752"} },
            { "customerName": "D", "balance": 2000, "address": {"planet": "EARTH","latitude": "28.476923","longitude":"-82.538753"} },
            { "customerName": "E", "balance": 2000, "address": {"planet": "EARTH","latitude": "28.476924","longitude":"-82.538754"} },
        ];
        var credentialData = [
            { "cardNo": "4493227621863476", "cardExpiryMonth": "06", "cardExpiryYear": "2022", "cardVerificationValue": "555" },
            { "cardNo": "4243898868120318", "cardExpiryMonth": "06", "cardExpiryYear": "2022", "cardVerificationValue": "275" },
            { "cardNo": "4769382981639854", "cardExpiryMonth": "06", "cardExpiryYear": "2022", "cardVerificationValue": "325" },
            { "cardNo": "4753565383254953", "cardExpiryMonth": "06", "cardExpiryYear": "2022", "cardVerificationValue": "419" },
            { "cardNo": "4632885445769070", "cardExpiryMonth": "06", "cardExpiryYear": "2022", "cardVerificationValue": "100" },
        ];
        demoData.forEach((item, index) => {
            User.create({
                customerName: item.customerName,
                balance: item.balance,
                address: item.address
            })
            .then(user =>{
                demoData[index].accountId = user.accountId;
                credentialData[index].accountId = user.accountId
                Credentials.create({
                    accountId: user.accountId,
                    cardNo: credentialData[index].cardNo,
                    cardExpiryMonth: credentialData[index].cardExpiryMonth,
                    cardExpiryYear: credentialData[index].cardExpiryYear,
                    cardVerificationValue:credentialData[index].cardVerificationValue,
                })
                .catch((error) => { return res.status(400).send(error)});
            })
            .catch(error => { return res.status(500).send(error)});
        });
        return res.status(200).send({"message":"Insertion has been done successfully"});
    },
    registerUser(req,res){
        /*req = {
            "user":{ "customerName": "babu", "balance": 2000, "address": {"planet": "EARTH","latitude": "28.476920","longitude":"-82.538750"}},
            "cre":{ "cardNo": "47535653832549533", "cardExpiryMonth": "07", "cardExpiryYear": "2042", "cardVerificationValue": "319" }
        };*/
//        res.body = req.body;
  //      return res.status(501).send(res.body);
        User.create({
            customerName: req.body.user.firstName+ " "+ req.body.user.lastName,
            balance: req.body.user.balance,
            address: {
                "line1": req.body.user.line1,
                "line2": req.body.user.line2+", "+req.body.user.line5,
                "line3": req.body.user.line3+", "+req.body.user.line4
            }
        })
        .then(user =>{
            Credentials.create({
                accountId: user.accountId,
                cardNo: req.body.cre.cardNo,
                cardExpiryMonth: req.body.cre.cardExpiryMonth,
                cardExpiryYear: req.body.cre.cardExpiryYear,
                cardVerificationValue:req.body.cre.cardVerificationValue,
            })
            .then(()=>{res.status(200).send({"message":"Information has been saved successfully"})})
            .catch((error) => { return res.status(400).send(error)});
        })
        .catch(error => { return res.status(501).send(error)});
    },

    retrieveRegLog(req, res){
        var Log = new Array();
        User.findAll()
        .then((logU) => {
            Log.push(logU);
            Credentials.findAll()
            .then((logC)=>{
                Log.push(logC);
                return res.status(200).send(Log);
            })
            .catch(error => res.status(400).send({'error':'Error while fetching credentials data'}));
        })
        .catch(error => res.status(400).send({'error':'Error while fetching User data'}));

        
    }
};
