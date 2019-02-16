const User = require('../models').User;
const Credentials = require('../models').Credentials;
module.exports = {
  create(req, res) {
    return User
      .create({
        accountId: req.body.accountId,
        customerName: req.body.customerName,
        balance: req.body.balance,
        currency: req.body.currency,
        address: req.body.address,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User.
      find({
        where: {
          accountId: req.params.userId,
        }
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },

  RetrieveBasedOnContraints(req, res) {
    return User
      .find({
        where: {
          accountId: req.params.userId,
          customerName: req.params.cName,
        }
      })
      .then(userItem => {
        if (!userItem) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }
        return res.status(200).send(userItem);
      })
      .catch(error => res.status(400).send(error));
  },
  updateById(req, res) {
    return User
      .findById(req.params.userId)
      .then(userItem => {
        if (!userItem) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return userItem
          .update({
            customerName: req.body.cname || userItem.customerName,
          })
          .then((newUserItem) => res.status(200).send(newUserItem))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  UpdateBasedOnContraints(req, res) {
    return User
      .find({
        where: {
          accountId: req.params.userId,
          customerName: req.params.cName,
        }
      })
      .then(userItem => {
        if (!userItem) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return userItem
          .update({
            customerName: req.body.cname || userItem.customerName,
          })
          .then((newUserItem) => res.status(200).send(newUserItem))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};
