'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user,options) {
        user.name = user.username
        user.image = 'https://i.pinimg.com/236x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};