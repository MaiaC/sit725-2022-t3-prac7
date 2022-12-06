let mongo = require("mongodb");
let client = require("../dbConnect");
let projectCollection;

setTimeout(() => {
  projectCollection = client.db().collection("Destinations");
}, 2000);

const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

// delete project
const removeProject = (projectId, callback) => {
  projectCollection.remove({ _id: new mongo.ObjectId(projectId) }, callback);
};

module.exports = {
  insertProjects,
  getProjects,
  removeProject,
};
