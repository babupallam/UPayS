const User = require('../models').User;
const Credentials = require('../models').Credentials;

module.exports = {
    retrieve(req, res) {
        return User
          .findById(req.params.userId, {
            include: [{
              model: Credentials,
              as: 'userCredentials',
            }],
          })
          .then(user => {
            if (!user) {
              return res.status(404).send({
                message: 'Todo Not Found',
              });
            }
            return res.status(200).send(user);
          })
          .catch(error => res.status(400).send(error));
    }

};