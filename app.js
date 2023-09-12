const express = require('express');
const moment = require('moment')
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const personRoute = require('./routes/personRoute');

// Set security HTTP headers
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data sanitization against NOSQL query Injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());


// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(personRoute);

app.get('/', (req,res) => {
  res.send('Welcome to HNG')
});

app.all('*', (req, res) => {
  return res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});


module.exports = app;