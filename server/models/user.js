'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    customerName: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    currency:{
      type: DataTypes.STRING,
      defaultValue: "INR"
    },
    address: DataTypes.JSON
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Credentials,{
      foreignKey: 'accountId',
      as: 'userCredentials',
    })
  };
  return User;
};