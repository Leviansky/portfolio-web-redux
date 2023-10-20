'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      Post.belongsTo(models.User)
    }
  }
  Post.init({
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isURL: {
          args: true,
          msg: 'Image must be a valid URL'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Content is required'
        }
      }
    },
    isPosting: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(post, options) {
        post.isPosting = false;
        post.image = 'https://cdn.dribbble.com/users/3043798/screenshots/14866276/media/5403af5784a23cd1a3f148c349974a6a.jpg?resize=1000x750&vertical=center';
      },
      beforeUpdate: function(post, options) {
        if (post.image === null || post.image === '') {
          throw new Error('Image cannot be null or an empty string');
        }
      }
    },
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
