const express = require("express"); // importing express

const app = express(); // initialising it
const bodyParser = require("body-parser");
const cors = require("cors");

const trainerRouter = require("./trainers");

app.use(cors());
app.use(bodyParser.json()); // converts the request body from JSON (res => res.json())

app.use((req, res, next) => {
  const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
  console.log(logEntry);
  next();
});

app.use("/trainers", trainerRouter);

app.use("*", (req, res, next) => next({ status: 404, message: "Invalid url" })); // catches 404's

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status ? err.status : 500).send(err.message);
});

const server = app.listen(4494, () => {
  console.log("Server started on", server.address().port);
});

module.exports = server;
