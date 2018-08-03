// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

  //SelectAll function for selecting and displaying all of the burgers
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //InsertOne function for adding a new burger
  insertOne: function (table, cols, value, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (?) ";

    console.log(queryString);

    connection.query(queryString, value, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  //UpdateOne function for moving a burger to the devoured section
  updateOne: function (table, value, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += value;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

// Export the orm object
module.exports = orm;