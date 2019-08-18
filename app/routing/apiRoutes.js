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

        let match = {
            name: "",
            photo: "",
            difference: 1000
        };

        console.log(req.body);

        let data = req.body;
        let userScores = data.scores;

        console.log(userScores);

        let totalDifference = 0;

        for (var i = 0; i < friendData.length; i++) {

            console.log(friendData[i]);
            totalDifference = 0;

            for (var j = 0; j < friendData[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

                if (totalDifference <= match.difference) {

                    match.name = friendData[i].name;
                    match.photo = friendData[i].photo;
                    match.difference = totalDifference;
                }
            }
        }

        friendData.push(data);

        res.json(match);

    });
};