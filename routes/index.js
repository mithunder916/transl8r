var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send("We'll turn your words into music");
})

module.exports = router;
