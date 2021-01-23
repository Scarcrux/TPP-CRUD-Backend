'use strict'

const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Express Middleware
const path = require('path')
const helmet = require('helmet') // creates headers that protect from attacks (security)
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests


// App Middleware
const whitelist = ['http://localhost:3000','http://localhost:1338','http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors())
if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(morgan('combined')) // use 'tiny' or 'combined'
}

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// static middleware
app.use(express.static(path.join(__dirname, '../public')))

// include the routes
app.use('/api', require('./controllers'))
// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
