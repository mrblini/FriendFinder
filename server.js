// ============================================================= DEPENDENCIES
var express = require("express");
var bodyParser = require('body-parser');

// ============================================================= SET UP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ============================================================= START SERVER & BEGIN TO LISTEN
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// ============================================================= ROUTES
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);