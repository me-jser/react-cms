var express = require('express');
var router = express.Router();
var Data = require('../lib/api');

var postsData ={};//声明一个全局的object存放数据

/* GET posts listing. */
router.get('/', function(req, res, next) {
    Data.remove({postid:req.query.id}).
        then((result) =>{
        postsData = result
    }).
        then(() =>{
        res.setHeader('Content-Type', 'application/json');
        //console.log(postsData);
        res.send(JSON.stringify(postsData));
        return true;
    });


});

module.exports = router;
