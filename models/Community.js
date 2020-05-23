const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  name: String,
  parishes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parish'
  }],
},
{
  timestamps: true
});

module.exports = mongoose.model('Community', CommunitySchema);
