'use strict';
/* export migration user_has_trainingGroup */
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('user_has_trainingGroup', {
      supervisor: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hasCanceled: {
        type: DataTypes.TINYINT,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('user_has_trainingGroup');
  }
};