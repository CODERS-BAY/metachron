'use strict';
/* export migration event */
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trainingContent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      takesPlace: {
        type: DataTypes.TINYINT,
        allowNull: false
      },
      trainer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trainingGroup_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('event');
  }
};