


app.get("/api/:tables", function(req, res) {
  v;
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var tables = req.body;

  console.log(tables);

  // We then add the json the user sent to the character array
  tables.push(newTable);

  // We then display the JSON to the users
  res.json(tables);
});






module.exports('apiRoutes');