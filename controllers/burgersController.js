var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var handlebarsObject = {
      burgers: data
    };
    res.render("index", handlebarsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name"], 
    [req.body.burger_name], 
    function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(result) {
      console.log(result);
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(
    {
      devoured: true
    },
    condition,
    function(result) {
      console.log(result);
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
