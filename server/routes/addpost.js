var express = require('express');
var router = express.Router();

var Data = require('../lib/api');


router.get('/', function(req, res, next) {

    const title = req.query.title;
    const author = req.query.author;
    const catalog = req.query.catalog;
    const tags = req.query.tags;
    const content = req.query.content;

    Data.save({
        title: title,
        author: author,
        catalog: catalog,
        tags: tags,
        content: content
    });

    res.setHeader('Content-Type', 'application/json');
    res.send({
        title: title,
        author: author,
        catalog: catalog,
        tags: tags,
        content: content
    });
    return true;

});

module.exports = router;