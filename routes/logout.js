var express = require('express');
var router = express.Router();

/* GET Logout */
router.get('/', function(req, res, next) {
    res.clearCookie('username');
    res.redirect('/login');
});

module.exports = router;
