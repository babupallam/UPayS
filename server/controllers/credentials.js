const Credentials = require('../models').Credentials;

module.exports = {
    create(req, res) {
      return Credentials
        .create({
            accountId: req.params.accountId,
            cardNo: req.body.cardNo,
            cardExpiryMonth: req.body.cardExpiryMonth,
            cardExpiryYear: req.body.cardExpiryYear,
            cardVerificationValue:req.body.cardVerificationValue,
        })
        .then(credentials => res.status(201).send(credentials))
        .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Credentials
          .all()
          .then(credentials => res.status(200).send(credentials))
          .catch(error => res.status(400).send(error));
    },
  };