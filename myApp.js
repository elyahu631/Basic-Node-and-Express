// myApp.js
require("dotenv").config();
let express = require("express");
let app = express();
const path = require("path");

// Middleware for serving static files
app.use("/public", express.static(path.join(__dirname, "public")));

// Route that handles GET requests to the root URL
app.get("/", function (req, res) {
  const absolutePath = path.join(__dirname, "views", "index.html");
  res.sendFile(absolutePath);
});

// Route for the /json path
app.get("/json", function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

console.log("Hello World"); //node myApp.js

module.exports = app;
