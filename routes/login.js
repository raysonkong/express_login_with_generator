var express = require('express');
var router = express.Router();

/* GET home page. */

const parseLoginQuery = (req, res, next) => {
    if (req.query.msg === 'fail') {
        res.locals.msg = "Wrong Credentials";
    } else {
        res.locals.msg = "";
    }

    next();
}

router.use(parseLoginQuery);

router.get('/', function(req, res, next) {
    res.render('login');
});

module.exports = router;
