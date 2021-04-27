'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_attend_on_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_attend_on_event.init({
    present: {
      type: DataTypes.TINYINT,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: "user_attend_on_event",
    modelName: 'user_attend_on_event',
  });
  return user_attend_on_event;
};