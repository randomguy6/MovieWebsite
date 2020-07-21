var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var url = require("../constants/constants").url;
var findMovie = require("../constants/constants").findMovie;

async function getMovie(id){
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let ret = {};
    try{
        await client.connect();
        ret = await findMovie(client, id);
    }
    catch(error){
        console.log(error);
    }
    client.close();
    return ret;
}

router.get("/:id", function(req, res, next){
    let id = req.params.id;
    getMovie(id).then(movie => res.send(movie));
});

module.exports = router;