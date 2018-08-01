// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, column, value, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += column;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += value;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, value, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += value;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

// Export the orm object
module.exports = orm;
