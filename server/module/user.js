
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');
var db = require('../lib/connectMongo');

var User = new Schema({
    username    : { type:String , required: true },
    password    : {type: String, required: true},
    avatar      : {type: String},
    age         : { type:Number, default:0 },
    email       : { type: String },
    time        : { type:Date, default:Date.now }
});

User.plugin(passportLocalMongoose);

module.exports = db.model('User', User);

