const mongoose = require('mongoose');

const ParishSchema = new mongoose.Schema({
  name: String
},
{
  timestamps: true
});

module.exports = mongoose.model('Parish', ParishSchema);
