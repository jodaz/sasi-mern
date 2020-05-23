const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const passport = require('passport');
const app = express();

require('dotenv').config();

// Setting up
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());
require('./config/passport')(passport);

// Database
const DB_DATABASE = process.env.DB_DATABASE;
const mongoUri = `mongodb://localhost:27017/${DB_DATABASE}`;

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useFindAndModify: true })
  .then(() => console.log(`MongoDB connected to ${mongoUri}`))
  .catch(error => console.log(error));

// Routing
require('./routes')(app);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

