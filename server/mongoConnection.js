const {MongoClient} = require("mongodb");

console.log("Executing script");

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://getaloadofthisguy:UTx48TOI97aaBuom@sandboc.yxkl3.mongodb.net/<dbname>?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);