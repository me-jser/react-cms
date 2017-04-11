var express = require('express');
var router = express.Router();
var Data = require('../lib/api');

var postsData ={};//声明一个全局的object存放数据

/**
 * @param id 通过唯一的postid进行查找
 */

router.all('/', function(req, res, next) {

    Data.update({postid:req.query.id},{
        title:req.query.title,
        content:req.query.content,
        tags:req.query.tags,
        catalog:req.query.catalog
    }).
    then(result => {
        postsData = result;
    }).
    then(() =>{
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postsData));
        return true;
    });


});

module.exports = router;
