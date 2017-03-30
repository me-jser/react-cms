var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/cms');

module.exports = db;