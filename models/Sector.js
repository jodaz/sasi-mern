const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectorSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Model = mongoose.model('sectors', SectorSchema);
