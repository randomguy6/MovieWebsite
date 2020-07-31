var express = require('express');
var router = express.Router();
var getMovies = require("../constants/constants").getMovies;

/* GET home page. */
router.get('/', function(req, res, next) {
    getMovies(-1)
    .then(movies => res.send(movies));
});

module.exports = router;
