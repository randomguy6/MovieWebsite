var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var url = require("../constants/constants").url;
// var findMovie = require("../constants/constants").findMovie;

async function searchMovie(client, id){
    let search = [{"$match": { "title": id }}];
    let ret = [];
    ret = await client.db("reviews").collection("reviews").aggregate(search).toArray();
    return ret;
}

async function getMovie(id){
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let ret = [];
    try{
        await client.connect();
        ret = await searchMovie(client, id);
    }
    catch(error){
        console.log(error);
    }
    client.close();
    return ret;
}

router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    getMovie(id).then(movie => res.send(movie));
});

module.exports = router;
