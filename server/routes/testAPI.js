var express = require("express");
var router = express.Router();
var dag = require("../constants/DAC.json");
var san = require("../constants/Sanju.json");
var wm = require("../constants/WickerMan.json");
const movies = [dag, san, wm];

const getMovies = function(movies){
    return movies;
}

router.get("/", function(req, res, next){
    const retMovies = getMovies(movies);
    res.send(retMovies);
});

module.exports = router;