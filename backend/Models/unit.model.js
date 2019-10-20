const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const unitSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

module.exports = unitSchema;