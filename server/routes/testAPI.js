var express = require("express");
var router = express.Router();
var dag = require("../constants/DAC.json");
var san = require("../constants/Sanju.json");
var wm = require("../constants/WickerMan.json");
const movies = [dag, san, wm];

const stringifyMovies = function(movies){
    ret = [];
    movies.forEach((movie) => {
        ret.push(JSON.stringify(movie));
    });

    return ret;
}

router.get("/", function(req, res, next){
    const moviesString = stringifyMovies(movies);
    // res.json(wm);
    res.send(moviesString);
});

module.exports = router;