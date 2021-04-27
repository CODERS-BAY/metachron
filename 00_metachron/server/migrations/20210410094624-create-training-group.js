'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('trainingGroup', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      internship: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      internshipStart: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      internshipEnd: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      trainingSubject_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('trainingGroup');
  }
};