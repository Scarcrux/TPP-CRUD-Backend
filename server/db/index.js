'use strict'

const db = require('./database')

const Campus = require('./Campus');
const Student = require('./Student');

Campus.belongsToMany(Student, {through: 'Campus_Student'});
Student.belongsToMany(Campus, {through: 'Campus_Student'});

module.exports = {
  db,
  Campus,
  Student
};
