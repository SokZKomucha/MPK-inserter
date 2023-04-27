const url = "mongodb://127.0.0.1:27017";
const databaseName = "testDatabase"; 

const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(url);



// Functions
////////////////////////////////////////////////////////////////
async function dbConnect(databaseName, collectionName) {
    let result = await client.connect();
    db = result.db(databaseName);
    return collection = db.collection(collectionName);
    // Important, run `client.close()` after done
}

async function dbFind(filterData, collectionName) {
    let data = await dbConnect(databaseName, collectionName);
    result = await data.find(filterData).toArray();
    client.close();
    return result;
}

async function dbFindOne(filterData, collectionName) {
    let data = await dbConnect(databaseName, collectionName);
    result = await data.findOne(filterData);
    client.close();
    return result;
}

async function dbInsertOne(addData, collectionName) {
    let data = await dbConnect(databaseName, collectionName);;
    result = await data.insertOne(addData);
    client.close();
    return result;
}

async function dbUpdateOne(filterData, updateData, collectionName) {
    let data = await dbConnect(databaseName, collectionName);
    result = await data.updateOne(filterData, { $set: updateData });
    client.close();
    return result;
}




// Exports
////////////////////////////////////////////////////////////////
module.exports = {
    dbConnect,
    dbFind,
    dbFindOne,
    dbInsertOne,
    dbUpdateOne
};