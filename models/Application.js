const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  description: String,
  state: String,
  sector: String,
  quantity: Number,
  answer_date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Application', ApplicationSchema);
