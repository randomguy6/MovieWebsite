const MongoClient = require("mongodb").MongoClient;
const axios = require("axios");

const url = "mongodb+srv://getaloadofthisguy:UTx48TOI97aaBuom@sandboc.yxkl3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const imdbUrl = "http://www.omdbapi.com/";
const imdbKey = "908db6be";

async function getFourMovies(client, n){
    let options = () =>{
        if(n>0)
            return {limit: n};
        else
            return {};
    };
    let ret = [];
    ret = await client.db("reviews").collection("reviews").find({}, options()).sort({ _id : -1 }).toArray();
    return ret;
}

async function findMovie(client, movieName, limit = 1){
    let query = {title: movieName};
    let options = () => {
        if(limit>0)
            return {limit: limit};
        return {}
    }
    let ret = [];
    ret = await client.db("reviews").collection("reviews").find(query, options()).toArray();
    return ret[0];
}

async function getMovieList(n=4){
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let ret = [];
    try{
        await client.connect();
        ret = await getFourMovies(client, n);
        // ret = ret.map(movie =>{
				// 	axios.get(imdbUrl+"?t="+movie.title+"&y="+movie.year+"&apikey="+imdbKey)
				// 	.then((res) => {
				// 		movie.poster = res.data.Poster;
				// 		console.log("After changing movie: ", movie);
				// 	})
				// 	.catch(error => {
				// 		console.log(error);
				// 	});
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