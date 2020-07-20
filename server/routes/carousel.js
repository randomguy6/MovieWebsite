var express = require("express");
const MongoClient = require("mongodb").MongoClient;
var url = require("../constants/constants").url;
var getMovies = require("../constants/constants").getMovies;
var router = express.Router();

async function getMovieList(){
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let ret = [];
    try{
        await client.connect();
        ret = await getMovies(client);
    }
    catch(error){
        console.log(error);
    }
    client.close();
    return ret;
}

router.get("/", function(req, res, next){
    // let movies = getMovieList();
    // res.send(movies);
    getMovieList()
      .then(movies => res.send(movies));
});

module.exports = router;