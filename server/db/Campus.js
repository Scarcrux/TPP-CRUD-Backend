const Sequelize = require('sequelize');
const db = require('./database')

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Please provide a name.'
      }
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    defaultValue: '/img/mit.png'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  description: {
    type: Sequelize.TEXT
  }
});
