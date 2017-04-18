var express = require('express');
var router = express.Router();

var User = require('../lib/user');

var bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    let password = req.query.password;

        User.findOne({username:req.query.username}).
            then((result) =>{

                if(result == null){
                    bcrypt.hash(password, saltRounds).then((hash)=>{

                        User.save({
                            username:req.query.username,
                            password:hash,
                            age:req.query.age,
                            email:req.query.email
                        }).
                            then((result) =>{
                            res.send({
                                status:'success'
                            });
                        })
                    })
                }else if(result.username == req.query.username) {
                    res.send({
                        status:'repeated'
                    });
                    return false;
                }
        });



});

module.exports = router;