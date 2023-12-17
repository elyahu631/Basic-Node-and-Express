// myApp.js
let express = require("express");
let app = express();

// Route that handles GET requests to the root URL
app.get('/', function(req, res) {
  res.send('Hello Express');
});

console.log("Hello World"); //node myApp.js

module.exports = app;
