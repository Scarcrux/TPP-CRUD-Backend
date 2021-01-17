'use strict'

const db = require('./database')

const Campus = require('./Campus');
const Student = require('./Student');

Campus.belongsToMany(Student, {through: 'campus_student'});
Student.belongsTo(Campus);

module.exports = {
  db,
  Campus,
  Student
};
