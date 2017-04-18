var express = require('express');
var router = express.Router();

var User = require('../lib/user');

var bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res, next) {
    let username= req.query.username;
    let password = req.query.password;
    console.log('init:'+username,password);
    User.findOne({username:username}).
        then((result) =>{
        res.setHeader('Content-Type', 'application/json');
        if(result == null){
            res.send({
                status:'noSuchUser'
            });
            return false;
        }

        bcrypt.compare(password, result.password, function(err, results) {
            if(results == true){
                res.send({
                    status:'success'
                })
            }else{
                res.send({
                    status:'failed'
                })
            };
        });
    })



});

module.exports = router;