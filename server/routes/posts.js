var express = require('express');
var router = express.Router();
var Data = require('../lib/api');

var postsData = [];

function getPostsData(){
    Data.find({}).
    then(result => {
        postsData.push(result);
    });
}

getPostsData();
/* GET posts listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(postsData));
    return true;

});

module.exports = router;
