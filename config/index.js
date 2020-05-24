require('dotenv').config();

module.exports = {
  SECRET: process.env.PASSPORT_SECRET,
  MONGO_URI: `${process.env.MONGO_URI}/${process.env.DB_DATABASE}`,
  APP_PORT: process.env.APP_PORT,
  OPTIONS: {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
};