const url = "mongodb+srv://getaloadofthisguy:UTx48TOI97aaBuom@sandboc.yxkl3.mongodb.net/<dbname>?retryWrites=true&w=majority";
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
module.exports = {
    url: url,
    getMovies: getFourMovies,
    findMovie: findMovie
}