var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req,res) {
      console.log("something trying to post");
      // var body = req.body;
      // var diffArr = [];
      // for (i = 0; i < friends.length; i++) {
      //
      // }
    });
};
