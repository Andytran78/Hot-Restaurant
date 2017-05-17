var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));
require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app);
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) { 
  res.sendFile(path.join(__dirname, "table.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});