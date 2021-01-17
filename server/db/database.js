'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));
let db;
if (process.env.HEROKU_POSTGRESQL_BROWN_URL) {
  // the application is executed on Heroku ... use the postgres         database
db = new Sequelize(process.env.HEROKU_POSTGRESQL_BROWN_URL, {
  dialect: "postgres",
  protocol: "postgres",
  port: 5432,
  host: "https://tpp-crud-backend.herokuapp.com/",
  logging: false //false
});
} else {
// create the database instance that can be used in other database files
db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
})
}

module.exports = db
