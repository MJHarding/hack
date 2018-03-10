var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    {
      id: 1,
      module: "COMP110",
      lecturer: "Ullrich Hustadt"
    },
    {
      id: 2,
      module: "COMP108",
      lecturer: "Prudence Wong"
    },
    {
      id: 3,
      module: "COMP201",
      lecturer: "Sebasitan Coope"
    }
  ]);
});
module.exports = router;
