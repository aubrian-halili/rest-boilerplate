const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
