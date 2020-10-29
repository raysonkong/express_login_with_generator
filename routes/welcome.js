var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const username = req.cookies.username;
    
    res.render('welcome', {
        username: username
    })
});

module.exports = router;
