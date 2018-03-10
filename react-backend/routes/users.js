var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
    sso: 346759883,
  	username: "sgsdalze"
  }, {
  	id: 2,
    sso: 093746788,
  	username: "sguhustadt"
  }, {
  	id: 3,
    sso: 639948758,
  	username: "sg0001"
  }, {
  	id: 4,
    sso: 536453662,
  	username: "sg0002"
  }, {
  	id: 5,
    sso: 201046735,
    username: "sg0003"
  }, {
  	id: 6,
  	username: "knob"
  }, {
  	id: 7,
    sso: 201046017,
  	username: "sg0004"
  }]);
});
module.exports = router;
