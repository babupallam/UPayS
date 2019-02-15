'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentLog = sequelize.define('PaymentLog', {
    txnId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    }, 
    fromUser: DataTypes.INTEGER,
    toUser: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {});
  PaymentLog.associate = function(models) {
    // associations can be defined here
  };
  return PaymentLog;
};