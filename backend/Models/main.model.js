const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  rol: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, {
    timestamps: true
  });

module.exports = userSchema;