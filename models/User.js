const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: String,
  second_name: String,
  surname: String,
  second_surname: String,
  login: String,
  password: String,
  identification: String,
  phone: String,
  email: String,
  address: String,
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  },
  parish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parish'
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
