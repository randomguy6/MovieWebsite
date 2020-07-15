var express = require("express");
var router = express.Router();
var dag = require("../constants/DAC.json");
var san = require("../constants/Sanju.json");
var wm = require("../constants/WickerMan.json");

const handleReview = function(req, res, next){
    let id = req.params.id;
    let ret = {};
    switch(id){
        case "The Wicker Man":
            ret = wm;
            break;
        case "Dragged Across Concrete":
            ret = dag;
            break;
        case "Sanju":
            ret = san;
            break;
        default:
            ret = {Error: "Not found"};
    }
    res.send(ret);
};

module.exports = handleReview;