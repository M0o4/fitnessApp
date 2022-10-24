"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Role, {
        foreignKey: "user_id",
        as: "role",
      });
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      userName: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      height: DataTypes.DOUBLE,
      weight: DataTypes.DOUBLE,
      birthday: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
