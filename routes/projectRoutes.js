var express = require("express");
var router = express.Router();
let controller = require("../controller");
// let client = require("../dbConnect");
// let projectCollection;

// setTimeout(() => {
//   projectCollection = client.mongoClient.db().collection("Project");
// }, 2000);

// const insertProjects = (project, callback) => {
//   projectCollection.insert(project, callback);
// };

// const getProjects = (callback) => {
//   projectCollection.find({}).toArray(callback);
// };

// get api

router.get("/", (req, res) => {
  controller.projectController.retrieveProjects(req, res);
  //   getProjects((err, result) => {
  //     if (err) {
  //       res.json({ statusCode: 400, message: err });
  //     } else {
  //       res.json({ statusCode: 200, message: "success", data: result });
  //     }
  //   });
});

// post api
router.post("/", (req, res) => {
  controller.projectController.createProjects(req, res);
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
});

module.exports = router;
