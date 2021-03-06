var express = require('express');
var router = express.Router();
const passport = require('passport');


router.post('/', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/error_login'
	})(req, res, next);


});

module.exports = router;