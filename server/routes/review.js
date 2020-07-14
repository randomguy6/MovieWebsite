var express = require("express");
var router = express.Router();
var dag = require("../constants/DAC.json");
var san = require("../constants/Sanju.json");
var wm = require("../constants/WickerMan.json");

const handleReview = function(req, res, next){
    let id = req.params.id;
    let ret = ""
    switch(id){
        case "The Wicker Man":
            ret = wm.review;
            break;
        case "Dragged Across Concrete":
            ret = dag.review;
            break;
        case "Sanju":
            ret = san.review;
            break;
        default:
            ret = "Not found"
    }
    res.send("Testing try 2 w/ " + ret);
};

module.exports = handleReview;