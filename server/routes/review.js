var express = require("express");
var router = express.Router();
// var dag = require("../constants/DAC.json");
// var san = require("../constants/Sanju.json");
// var wm = require("../constants/WickerMan.json");

router.get("/", function(req, res, next){
    res.send("Test run good");
});

module.exports = router;