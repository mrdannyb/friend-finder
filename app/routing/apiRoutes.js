var friends = require("../data/friends.js");

//constructor for making an object linking friend name to sum of differences^2




module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
      res.json(friends);
    });

    app.post("/survey", function(req,res) {
      console.log(req);
      console.log("----------");
      console.log(res);
      res.json(res);

      //function to compare the score sums, probably save in an array
      //find the lowest (either by a sorting algorithm or by getlowest method)
      //return the lowest (or one tied for lowest)
    });
};
