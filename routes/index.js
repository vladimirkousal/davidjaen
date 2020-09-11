var express = require('express');
var router = express.Router();

// Create custom homepage
// --------------------------------------------------
router.get('/', function(req, res, next) {
	if(req.user){
		login = true;
		res.render("index", { login } );
	} else{
		login = false;
		res.render("index", { login } );
	}
});
// --------------------------------------------------

module.exports = router;
