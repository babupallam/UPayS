const User = require('../models').User;
const Credentials = require('../models').Credentials;
const PaymentLog = require('../models').PaymentLog;
module.exports = {
  confirmPayment(req, res,next) {
      const details = req.body;
    /*var details = {
      metaData: {
        toAccount: '11e27490-2eb6-11e9-a612-d108d6072963',
        customerName: 'A',
        amount: 130
      },
      credentials: {
        cardNo: '4243898868120318',
        cardExpiryMonth: 06,
        cardExpiryYear: 2022,
        cardVerificationValue: '275'
      }
    }*/
    let invoice = {
      "paymentId": "N/A",
      "fromAccount": { "customerName": "N/A", "accountIndex": -1 },
      "toAccount": { "customerName": "N/A", "accountIndex": -1 },
      "amount": { "amount": 0, "currency": "INR" },
      "status": false
    };
    invoice.amount.amount = details.metaData.amount;
    //retrieving fromAccount Details
    var step1 = Credentials
      .findOne({ where: { cardNo: details.credentials.cardNo, cardExpiryMonth: details.credentials.cardExpiryMonth, cardExpiryYear: details.credentials.cardExpiryYear}})
      .then(creItem => {
        if (!creItem) {return res.status(404).send({message: 'Credentials Not Found'});}
        //return res.status(200).send(creItem);
        User
        .findOne({ where: { accountId: creItem.accountId }})
        .then(fromUser=>{
          if(!fromUser){ return res.status(404).send({message: 'fromUser Not found'});}
          invoice.fromAccount.accountIndex = fromUser.id;
          invoice.fromAccount.customerName = fromUser.customerName;
          //return res.status(200).send(fromUser);
        })
        .catch(error =>{ return res.status(300).send(error)});
      })
      .catch(error =>{ return res.status(400).send(error)});

    //retrieving toAccount Details
    var step2 = step1.then( ()=>{
      User
      .findOne({ where:{ accountId: details.metaData.toAccount, customerName: details.metaData.customerName }})
      .then(toUser =>{
        if(!toUser){return res.status(404).send({ message: 'toUser Not found'});}
        invoice.toAccount.accountIndex = toUser.id;
        invoice.toAccount.customerName = toUser.customerName;
        //return res.status(200).send(invoice);
      })
      .then(()=>{
        User
        .findById(invoice.fromAccount.accountIndex)
        .then(fromItem => {
          if (!fromItem) {return res.status(404).send({ message: 'fromItem Not Found'}); }
          fromItem
            .update({ balance: (fromItem.balance - invoice.amount.amount)})
            .then(() => {
              User
              .findById(invoice.toAccount.accountIndex)
              .then(toItem =>{
                if (!toItem) {return res.status(404).send({message: 'toItem Not Found' });}
                toItem
                  .update({balance: (toItem.balance + invoice.amount.amount) })
                  .then(()=>{
                    invoice.status = true;
                    //res.status(200).json(invoice);
                    res.locals.invoice =invoice;
                    next();                     
                  })
                  .catch((error) => res.status(301).send(error));
              })
              .catch((error) => res.status(302).send(error));  
            })
            .catch((error) => res.status(303).send(error));
        })
        .catch((error) => res.status(304).send(error));
      })
      .catch(error => res.status(400).send(error));
    });
  },
  generateLog(req, res){
    var invoice = res.locals.invoice;
    PaymentLog
       .create({ 
         fromUser: invoice.fromAccount.accountIndex,
         toUser: invoice.toAccount.accountIndex,
         amount: invoice.amount.amount,
         status: invoice.status
       })
       .then(txn =>{
         invoice.paymentId = txn.txnId;
         return res.status(200).send(invoice);
       })
       .catch((error) => res.status(305).send(error));
  },
  retrieveLog(req, res){
    return PaymentLog.findAll()
    .then(logs => res.status(200).send(logs))
    .catch(error => res.status(400).send(error));
  }
};
