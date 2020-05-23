const mongoose = require('mongoose');

const NoveltySchema = new mongoose.Schema({
  description: String,
  state: String,
  sector: String,
  answer_date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Novelty', NoveltySchema);
