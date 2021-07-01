'use strict';
const {
  Model
} = require('sequelize');

/* export model definition user_has_trainingGroup */
module.exports = (sequelize, DataTypes) => {
  class user_has_trainingGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_has_trainingGroup.init({
    supervisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "user"
        },
        foreignKey: "id"
      },
    },
    hasCanceled: {
      type: DataTypes.TINYINT,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: "user_has_trainingGroup",
    modelName: 'user_has_trainingGroup',
  });
  return user_has_trainingGroup;
};