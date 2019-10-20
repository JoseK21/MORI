const mongoose = require('mongoose');
const companySchema = require('../Models/company.model');

companySchema.statics = {
  /* create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  }, */
  login: function (query, cb) {
    this.find(query, cb);
  }
}
// User : Collection
const userModel = mongoose.model('companies', companySchema);
module.exports = userModel;