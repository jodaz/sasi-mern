const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

require('dotenv').config();

// Setting up
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

// Database
const DB_DATABASE = process.env.DB_DATABASE;
const mongoUri = `mongodb://localhost:27017/${DB_DATABASE}`;

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useFindAndModify: true })
  .then(() => console.log(`MongoDB connected to ${mongoUri}`))
  .catch(error => console.log(error));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

