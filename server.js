var express = require("express");
var app = express();
var cors = require("cors");
var port = process.env.port || 3000;
let projectCollection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// mongo db connection
const MongoClient = require("mongodb").MongoClient;

// add database connections
const uri =
  "mongodb+srv://maiaccog:prac4@cluster0.sbhkstm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("MongoDB connected");
    } else {
      console.log("db error: ", err);
      process.exit(1);
    }
  });
};

const cardList = [
  {
    title: "Guatemala",
    image: "images/guatemala.jpeg",
    link: "About Guatemala",
    desciption: "Demo desciption about Guatemala",
  },
  {
    title: "Galapagos",
    image: "images/galapagos.jpeg",
    link: "About Galapagos",
    desciption: "Demo desciption about Galapagos",
  },
];

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

app.listen(port, () => {
  console.log("App listening to: http://localhost:" + port);
  createCollection("Destinations");
});
