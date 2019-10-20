const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const emissionfactorSchema = new Schema({
  namefuel: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

module.exports = emissionfactorSchema;