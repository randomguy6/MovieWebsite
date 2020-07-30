const MongoClient = require("mongodb").MongoClient;
const axios = require("axios");

const url = "mongodb+srv://getaloadofthisguy:UTx48TOI97aaBuom@sandboc.yxkl3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const imdbUrl = "http://www.omdbapi.com/";
const imdbKey = "908db6be";

async function getFourMovies(client){
    let options = {limit: 4};
    let ret = [];
    ret = await client.db("reviews").collection("reviews").find({}, options).sort({ _id : -1 }).toArray();
    return ret;
}

async function findMovie(client, movieName){
    let query = {title: movieName};
    let options = {limit: 1};
    let ret = [];
    ret = await client.db("reviews").collection("reviews").find(query, options).toArray();
    return ret[0];
}

async function getMovieList(){
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let ret = [];
    try{
        await client.connect();
        ret = await getFourMovies(client);
        // axios.get(imdbUrl+"?t="+name+addYear+"&apikey="+imdbKey)
        // .then((res) => {
        //     response.send(res.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    }
    catch(error){
        console.log(error);
    }
    client.close();
    return ret;
}

module.exports = {
    url: url,
    imdbUrl: imdbUrl,
    imdbKey: imdbKey,
    getMovies: getMovieList,
    findMovie: findMovie
}