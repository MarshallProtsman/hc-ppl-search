const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./server/routes")(app);
// app.get("*", (req, res) =>
//   res.status(200).send({
//     message: "🌎 Hello World",
//   })
// );

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", function (req, res) {
  res.status(200).send({
    message: "🌎 Hello Woooooorld",
  });
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// const port = process.env.PORT || 8001;
// app.listen(port);

module.exports = app;