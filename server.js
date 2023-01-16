var express = require("express");
var app = express();
var cors = require("cors");
var port = process.env.port || 3000;
// let projectCollection;
let client = require("./dbConnect");
let router = require("./routes/projectRoutes");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/projects", router);

app.get("/addTwoNumbers/:firstNumber/:secondNumber", function (req, res, next) {
  var firstNumber = parseInt(req.params.firstNumber);
  var secondNumber = parseInt(req.params.secondNumber);
  var result = firstNumber + secondNumber || null;
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400);
  } else {
    res.json({ result: result, statusCode: 200 }).status(200);
  }
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

// // mongo db connection
// const MongoClient = require("mongodb").MongoClient;

// // add database connections
// const uri =
//   "mongodb+srv://maiaccog:prac4@cluster0.sbhkstm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const createCollection = (collectionName) => {
//   client.connect((err, db) => {
//     projectCollection = client.db().collection(collectionName);
//     if (!err) {
//       console.log("MongoDB connected");
//     } else {
//       console.log("db error: ", err);
//       process.exit(1);
//     }
//   });
// };

// // insert project
// const insertProjects = (project, callback) => {
//   projectCollection.insert(project, callback);
// };

// const getProjects = (callback) => {
//   projectCollection.find({}).toArray(callback);
// };

// const cardList = [
//   {
//     title: "Guatemala",
//     image: "images/guatemala.jpeg",
//     link: "About Guatemala",
//     desciption: "Demo desciption about Guatemala",
//   },
//   {
//     title: "Galapagos",
//     image: "images/galapagos.jpeg",
//     link: "About Galapagos",
//     desciption: "Demo desciption about Galapagos",
//   },
// ];

// app.get("/api/projects", (req, res) => {
//   //res.json({ statusCode: 200, data: cardList, message: "Success" });
//   getProjects((err, result) => {
//     if (err) {
//       res.json({ statusCode: 400, message: err });
//     } else {
//       res.json({ statusCode: 200, message: "success", data: result });
//     }
//   });
// });

// // post api
// app.post("/api/projects", (req, res) => {
//   console.log("New project added", req.body);
//   var newProject = req.body;
//   insertProjects(newProject, (err, result) => {
//     if (err) {
//       res.json({ statusCode: 400, message: err });
//     } else {
//       res.json({
//         statusCode: 200,
//         message: "project successfully added",
//         data: result,
//       });
//     }
//   });
// });

http.listen(port, () => {
  console.log("App listening to: http://localhost:" + port);
  // createCollection("Destinations");
});
