const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Mongoose connection
mongoose
  .connect(
    "mongodb+srv://finstox:finstox8214599052695@finstox.qpuphwy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((err) => {
    console.log("Error while connecting to Finstox Database", err);
  });

app.get("/", (req, res) => {
  res.send("hello welcome to this site");
});

app.listen(3030, (req, res) => {
  console.log("server is running on port 3030");
});
