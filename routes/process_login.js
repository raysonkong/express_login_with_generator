var express = require('express');
var router = express.Router();

// Process Login

router.post('/', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    
    if (req.body.password === 'x') {
        res.cookie('username', username);
        res.redirect('/welcome');
    } else {
        res.redirect('/login?msg=fail');
    }
});

module.exports = router;
