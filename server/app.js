//import DB connection
require('./db/config/index');
const express = require('express'),
  app = express();

const birthdayRouter = require('./routes/birthdays');

//Middleware
app.use(express.json());

app.use('/api/birthday', birthdayRouter);

module.exports = app;
