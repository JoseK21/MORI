const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

module.exports = companySchema;