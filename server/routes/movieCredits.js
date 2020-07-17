var express = require('express');
var router = express.Router();
const axios = require("axios");

const imdbUrl = "http://www.omdbapi.com/";
const imdbKey = "908db6be";

// TODO put in error checking if year isnt specified

const getURL = (name, year) => {
    let addYear = "";
    if(year !== undefined){
        addYear += "&y="+year;
    }
    return imdbUrl+"?t="+name+addYear+"&apikey="+imdbKey;
};


router.get('/:movieName/:year?', function(req, response, next) {
    const url = getURL(req.params.movieName, req.params.year);
    axios.get(url)
      .then((res) => {
          response.send(res.data);
      })
      .catch(error => {
          console.log(error);
    });
});

module.exports = router;
