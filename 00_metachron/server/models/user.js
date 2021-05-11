'use strict';

/* import bcrypt */
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');

/* export model definition User */
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Userrole, Userdatainfo, Qualification, TrainingGroup, Event }) {
      // define association here

      this.belongsTo(Userrole, { foreignKey: "userrole_id" });

      this.belongsTo(Userdatainfo, { foreignKey: "userdata_id" });

      this.belongsToMany(TrainingGroup, { through: "user_has_trainingGroup", foreignKey: "user_id" });

      this.belongsToMany(Qualification, { through: "user_has_qualification", foreignKey: "user_id" });

      this.hasMany(Event, { foreignKey: "trainer_id" });

      this.belongsToMany(Event, { through: "user_attend_on_event", foreignKey: "user_id" });

    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pic_path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userrole_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userdata_id: {
      type: DataTypes.INTEGER,
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
    tableName: "user",
    modelName: 'User',
    hooks: {
      beforeCreate: function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      }
    }
  });
  return User;
};