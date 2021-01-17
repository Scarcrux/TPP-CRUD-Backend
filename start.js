'use strict'

const { db } = require('./server/db')
const app = require('./server')
const PORT = 1337
// use process.env variables to keep private variables,
require('dotenv').config()

db.sync()
  .then(() => {
    console.log('Database synced')
    app.listen(process.env.PORT || 1337, () => {
      console.log(`Now serving on port ${process.env.PORT || 1337}`)
    })
  })
