var express = require("express");
var getMovies = require("../constants/constants").getMovies;
var router = express.Router();

router.get("/", function(req, res, next){
    getMovies()
      .then(movies => res.send(movies));
});

module.exports = router;