// controller contains crud functionality only

let projectModel = require("../models/project");
// let dbConnect = require("./dbConnect");
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

// create project

const createProjects = (req, res) => {
  console.log("New project added", req.body);
  var newProject = req.body;
  projectModel.insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: "project successfully added",
        data: result,
      });
    }
  });
};

// retrieve project
const retrieveProjects = (req, res) => {
  projectModel.getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "success", data: result });
    }
  });
};

module.exports = { retrieveProjects, createProjects };
