var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Router GET function for getting all of the burger data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Router GET function for displaying the burger data as an API if the user desires
router.get("/api/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var burgersList = {
            burgers: data
        };
        res.json(burgersList);
    });
    });

//Router POST function for adding a new burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        // Send back the ID of the new burger
        res.json({
            id: result.insertId
        });
    });
});

//Router PUT function for updating a burger to devoured
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;