var express = require('express');
var router = express.Router();
var Data = require('../lib/api');

var postsData = {};//声明一个全局的object存放数据

//function getPostsData(){
//    //find函数如果传入空的对象 {},数据接口无法更新
//    Data.find().
//    then(result => {
//        postsData = result;
//    });
//}
//
//getPostsData();
/* GET posts listing. */
router.get('/', function(req, res, next) {

    Data.find().
    then(result => {
        postsData = result;
    }).
    then(() =>{
        res.setHeader('Content-Type', 'application/json');
        //console.log(postsData);
        res.send(JSON.stringify(postsData));
        return true;
    });


});

module.exports = router;
