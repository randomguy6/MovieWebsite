const MongoClient = require("mongodb").MongoClient;
const testURL = require("./constants/constants").url;
const getMovie2 = require("./constants/constants").getMovies;
const findMovie = require("./constants/constants").findMovie;

// console.log("test url: ", testURL);

console.log("Executing script");
const url = "mongodb+srv://getaloadofthisguy:UTx48TOI97aaBuom@sandboc.yxkl3.mongodb.net/<dbname>?retryWrites=true&w=majority";

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("video");
//     dbo.listCollections().toArray()
//         .then(list => console.log("List is: ", list[0]));
//   }
// );

async function getMovies(client){
    let query = {};
    let options = {limit: 4};
    let ret = [];
    ret = await client.db("reviews").collection("reviews").find(query, options).toArray();
    ret = ret.map(collection => {
        return collection.title;
    })
    return ret;
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function getSortedList(client){
    let ret = [];
    ret = await client.db("reviews").collection("reviews").find({}, {limit: 4}).sort({ _id : -1 }).toArray();
    return ret;
}

async function main(){
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        await client.connect();
        // await listDatabases(client);
        // let collections = await getMovies(client);
        // let collections2 = await getMovie2(client);
        // let movie = await findMovie(client, "Sanju");
        // console.log("Movies: ", collections);
        // console.log("Movies 2: ", collections2);
        let movie = await getSortedList(client);
        console.log("Length of the list", movie.length);
        console.log("Movies in list: ", movie);
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

// main();

// let thing = {name: "Bob"};
// thing.otherthing = "something";
// console.log(thing);

const date = new Date("2020-07-31T06:00:00.000Z");
console.log(date.toDateString());