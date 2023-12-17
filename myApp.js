// myApp.js
let express = require("express");
let app = express();
const path = require('path'); 

// Route that handles GET requests to the root URL
app.get('/', function(req, res) {
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

console.log("Hello World"); //node myApp.js

module.exports = app;
