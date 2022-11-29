var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
});
