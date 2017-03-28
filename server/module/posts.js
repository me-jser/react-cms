/**
 * 提供模型进行文章的操作
 */
var mongoose = require('mongoose');

var db = require('../lib/connectMongo');

//一个用户模型
var PostsSchema = new mongoose.Schema({
    title       : { type:String },
    author      : { type: String},
    catalog     : { type: String},
    tags        : { type: String},
    publishtime : { type:Date, default:Date.now },
    postid      : { type: String},
    content     : { type: String}
});
//创建Model
var PostsModel = db.model("posts", PostsSchema );
module.exports = PostsModel;
