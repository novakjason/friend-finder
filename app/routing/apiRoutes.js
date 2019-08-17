// linking api routes to data
var friendData = require("../data/friends");

// exporting api routes
module.exports = app => {

    // api GET request
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // api POST requests
    app.post("/api/friends", (req, res) => {
        // will be used to handle incoming survey results and the compatibility logic
    });
};