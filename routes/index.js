var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.cookie('views', parseInt(req.signedCookies.views || 0) + 1, {
		signed: true,
		httpOnly: true
	});
	res.locals.views = req.cookies.views || 0;
  res.render('index', { title: 'Express' });
});

router.get('/refresh', function (req, res, next) {
    res.clearCookie("views");
    res.redirect('/');
});

module.exports = router;
