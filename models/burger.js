// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (new_burger_name, cb) {
    orm.insertOne("burgers", "burger_name", new_burger_name, function (res) {
      cb(res);
    });
  },
  updateOne: function (condition, cb) {
    orm.updateOne("burgers", "devoured=1", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;