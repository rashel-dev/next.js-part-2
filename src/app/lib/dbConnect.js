const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let isConnected = false;

export const connect = async (collection) => {
    const database = process.env.DB_NAME;
    if (!isConnected) {
        await client.connect();
        isConnected = true;
    }
    return client.db(database).collection(collection);
}