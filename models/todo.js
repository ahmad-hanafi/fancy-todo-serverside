'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: "Title cannot be empty"
      }
    }},
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        }
    }},
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        ischeckDate() {
          const today = new Date()
          if(this.due_date <= today) {
            throw new Error("Date must more than today")
          }
        },
    }},
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  })
  Todo.addHook('beforeCreate', (Todo, options) => {
    Todo.status = 'Unfinished';
  });
  return Todo;
};