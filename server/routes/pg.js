var express = require('express');
var router = express.Router();
const axios = require("axios");

const imdbUrl = "http://www.omdbapi.com/";
const imdbKey = "908db6be";
const movie = "The Wicker Man"; // PLACE HOLDERS
const year = 2006; // PLACE HOLDERS

/* GET users listing. */
router.get('/', function(request, response, next) {
    axios.get(imdbUrl+"?t="+movie+"&y="+year+"&apikey="+imdbKey)
      .then((res) => {
          console.log(res.data);
          response.send(res.data);
      })
      .catch(error => {
          console.log(error);
      });
});

module.exports = router;
