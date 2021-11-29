//node server

const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("home page");
      res.end();
    } else {
      res.write("404");
      res.end();
    }
  })
  .listen(3000, () => console.log("port started at 3000"));

//express server

const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send("Welcome from Express server");
  })
  .listen(4000, () => console.log("port started at 4000"));
