const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
  name: String
},
{
  timestamps: true
});

module.exports = mongoose.model('Sector', SectorSchema);
