var express = require('express');
var router = express.Router();
var Data = require('../lib/api');

var postsData ={};//声明一个全局的object存放数据


/* GET posts listing. */
router.get('/', function(req, res, next) {
    Data.update({postid:req.query.id},{
        title:req.query.id
    }).
    then(result => {
        postsData = result;
    }).
    then((doc) =>{
        res.setHeader('Content-Type', 'application/json');
        if(doc){
            res.send({
                status: 'success'
            });
        }else {
            res.send({
                status: 'failed'
            });
        }
    });


});

module.exports = router;
