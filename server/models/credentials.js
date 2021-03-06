'use strict';
module.exports = (sequelize, DataTypes) => {
  const Credentials = sequelize.define('Credentials', {
    accountId: {
      type:DataTypes.INTEGER
    },
    cardNo:{
      type: DataTypes.STRING
    },
    cardExpiryMonth: {
      type:DataTypes.STRING
    },
    cardExpiryYear: {
      type: DataTypes.STRING
    },
    cardVerificationValue:{
      type:DataTypes.STRING
    }

  }, {});
  Credentials.associate = function(models) {
    // associations can be defined here
    Credentials.belongsTo(models.User,{
      foreignKey: 'accountId',
      onDelete: 'CASCADE'
    });
  };
  return Credentials;
};
