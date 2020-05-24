const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const passport = require('passport');
const app = express();

// Setting up
const { APP_PORT, MONGO_URI, OPTIONS } = require('./config');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(`${MONGO_URI}`, OPTIONS)
  .then(() => console.log(`MongoDB connected to ${MONGO_URI}`))
  .catch(error => console.log(error));

// Routing
require('./routes')(app);

app.listen(APP_PORT, () => {
  console.log(`Listening on http://127.0.0.1:${APP_PORT}`);
});
