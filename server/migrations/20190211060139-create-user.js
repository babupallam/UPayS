'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accountId: {
        allowNull: false,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      customerName: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.FLOAT
      },
      currency: {
        type: Sequelize.STRING,
        defaultValue: "INR"
      },
      address: {
        type: Sequelize.JSON
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};