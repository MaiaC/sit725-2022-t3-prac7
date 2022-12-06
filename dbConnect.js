require("dotenv").config();

// mongo db connection
const MongoClient = require("mongodb").MongoClient;

// add database connections
const uri =
  "mongodb+srv://maiaccog:prac4@cluster0.sbhkstm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("MongoDB connected");
  } else {
    console.log("db error: ", err);
    process.exit(1);
  }
});

module.exports = client;
