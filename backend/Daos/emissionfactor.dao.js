const mongoose = require('mongoose');
const emissionfactorSchema = require('../Models/emissionfactor.model');

emissionfactorSchema.statics = {
  login: function (query, cb) {
    this.find(query, cb);
  }
}
const userModel = mongoose.model('emissionfactors', emissionfactorSchema);
module.exports = userModel;