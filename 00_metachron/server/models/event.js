'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, TrainingGroup, TrainingContent }) {
      // define association here

      this.belongsTo(User, { foreignKey:"trainer_id" });
     
      this.belongsTo(TrainingGroup, { foreignKey:"trainingGroup_id" });

      this.belongsToMany(User, { through: "user_attend_on_event", foreignKey: "event_id" });

    }
  }
  Event.init({
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
  }, {
    sequelize,
    tableName: "event",
    modelName: 'Event',
  });
  return Event;
};