'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ TrainingSubject, User, Event }) {
      // define association here
      this.belongsTo(TrainingSubject, { foreignKey: "trainingSubject_id"});
     
      this.belongsToMany(User, { through: "user_has_trainingGroup", foreignKey: "trainingGroup_id" });
     
      this.hasMany(Event, { foreignKey: "trainingGroup_id" });

    }
  }
  TrainingGroup.init({
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
  }, {
    sequelize,
    tableName: "trainingGroup",
    modelName: 'TrainingGroup',
  });
  return TrainingGroup;
};