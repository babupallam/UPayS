'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      txnId:{
        allowNull: false,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,      
      },
      fromUser: {
        type: Sequelize.INTEGER
      },
      toUser: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PaymentLogs');
  }
};