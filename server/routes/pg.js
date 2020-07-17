var express = require('express');
var router = express.Router();
const axios = require("axios");

const imdbUrl = "http://www.omdbapi.com/";
const imdbKey = "908db6be";
const movie = "The Wicker Man"; // PLACE HOLDERS
const movieYear = 2006; // PLACE HOLDERS

router.get('/:something/:key?', function(req, res, next) {
    let something = req.params.something;
    let key = req.params.key;
    console.log("Something is: ", something, " and optional key: ", key);
    res.send('response on pg ' + something + " " + key);
});

module.exports = router;
