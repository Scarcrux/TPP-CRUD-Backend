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
      notEmpty: {
        args: true,
        msg: 'Please provide an image URL.'
      },
    defaultValue: '/img/mit.png'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
      notEmpty: {
        args: true,
        msg: 'Please provide a description.'
      }
  },
  description: {
    type: Sequelize.TEXT
  }
});
