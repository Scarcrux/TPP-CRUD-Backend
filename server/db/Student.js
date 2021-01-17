const Sequelize = require('sequelize');
const db = require('./database')

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      msg: 'Please provide a first name.'
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      msg: 'Please provide a last name.'
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
      msg: 'Please provide an e-mail address.'
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      msg: 'Please provide an image URL.'
    },
    defaultValue: '/img/avatar.png'
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 5.0 // set to 5 to accomodate schools that go over 4
    }
  }
});
