const mongoose = require('mongoose');
const userSchema = require('../Models/main.model');

userSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
}
// User : Collection
const userModel = mongoose.model('passengers', userSchema);
module.exports = userModel;