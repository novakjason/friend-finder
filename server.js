// dependencies
var express = require("express");
var path = require("path");

// sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});