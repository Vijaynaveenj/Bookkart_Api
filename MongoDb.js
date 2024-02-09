const { MongoClient, ServerApiVersion } = require("mongodb");
const url =
  "mongodb+srv://vijaynaveen01j:Vjnaveen007@demo.r5r4udq.mongodb.net/";

// Connecting Mongoclient
const MongoDBclient = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connecting to Db
async function connectToDatabase() {
  try {
    await MongoDBclient.connect();
    await MongoDBclient.db("demo").command({ ping: 1 });
    console.log("Successfully Connected To Vijay Database Demo Happy Hacking");
  } catch (error) {
    console.log(`Error in Database Connection : ${error}`);
  }
}

module.exports = {
  connectToDatabase,
  MongoDBclient,
};
