const mongoose = require('mongoose');
const unitSchema = require('../Models/unit.model');

unitSchema.statics = {
  login: function (query, cb) {
    this.find(query, cb);
  }
}
const userModel = mongoose.model('units', unitSchema);
module.exports = userModel;