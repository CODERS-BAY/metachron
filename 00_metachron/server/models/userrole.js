'use strict';
const {
  Model
} = require('sequelize');

/* export model definition Userrole */
module.exports = (sequelize, DataTypes) => {
  class Userrole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.hasMany(User, { foreignKey: "userrole_id"});
    }
  }
  Userrole.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: "userrole",
    modelName: 'Userrole',
  });
  return Userrole;
};