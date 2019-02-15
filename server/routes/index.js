const usersController = require('../controllers').users;
const credentialController = require('../controllers').credentials;
const profileController = require('../controllers').profiles;
const paymentController = require('../controllers').payment;
const adminController = require('../controllers').admin;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Payment API!',
  }));
  //setup demo
  app.post('/api/admin/set',adminController.setDemo);
  
  //user related functions
  app.post('/api/users', usersController.create);/*{insert new tuple
  postman body: {
    customerName: babu
    balance: 1000
    currency: INR
    address:{planet: EARTH,latitude: 28.476920,longitude:-82.538750}
  }
}*/
  app.get('/api/users', usersController.list);//listing all users details
  app.get('/api/users/:userId', usersController.retrieve);//retrieving a single user
  
  // http://localhost:3001/api/users/0/name/babupallam
  app.get('/api/users/:userId/name/:cName', usersController.RetrieveBasedOnContraints);//retrieve based on two contraints  
  
  app.put('/api/users/:userId', usersController.updateById);//inputs for updating user tuple using uId, Data being updated is 'cname'
  //http://localhost:3001/api/users/0/name/babupallam
  app.put('/api/users/:userId/name/:cName', usersController.UpdateBasedOnContraints);//update based on multiple constraints  

  
  //user credential related functions
  app.post('/api/credentials', credentialController.create);
  app.get('/api/credentials', credentialController.list);//listing all credentials

  
  
  //profileController
  app.get('/api/profiles/:userId', profileController.retrieve);//retrieving a single user details
  
  
  //payment
//  app.post('/accept', UserCtrl.authMiddleware, PaymentCtrl.confirmPayment);
    app.post('/api/payment', paymentController.confirmPayment, paymentController.generateLog);
    app.post('/api/pay',paymentController.generateLog);
    app.get('/api/paylogs',paymentController.retrieveLog);
    app.post('/api/regnu',adminController.registerUser);/*
    { "user": { "balance": 1000, "firstName": "babu", "lastName": "pallam", "line1": "sfkjsdkjfh", "line2": "kjkjk", "line3": "Kerala", "line4": "India", "line5": "679323" }, 
    "cre": { "cardNo": "666666666666666", "cardExpiryMonth": "02", "cardExpiryYear": "17", "cardVerificationValue": "cvv" } } */


    app.get('/api/reglogs',adminController.retrieveRegLog);
};