// ============================================================= DEPENDENCIES
var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");

// ============================================================= SET UP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ============================================================= ROUTES
var apiRoutes = require('./app/routing/apiRoutes')(app)
var htmlRoutes = require('./app/routing/htmlRoutes')(app)

// ============================================================= START SERVER & BEGIN TO LISTEN
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});