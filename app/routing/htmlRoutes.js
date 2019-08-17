var path = require("path");

// exporting html routes
module.exports = app => {

    // if no matching route is found default to home
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //  survey.html route
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};