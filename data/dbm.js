const { MongoClient, ServerApiVersion } = require('mongodb');
const uri ="mongodb+srv://user:2TFmcPpY3RmmfuOd@cluster0.o1klx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

module.exports = function(collectionName, callback){
    
    client.connect( async err =>{
        if (err) {
            console.error("DB Connection failed", err);
            return;
        }
        const collection = client.db("sample_restaurants").collection(collectionName);
        await callback(collection);
        client.close();
    });
}