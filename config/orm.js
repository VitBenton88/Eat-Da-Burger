var connection = require("./connection.js");

var orm = {
	//select from all in burgers table
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //insert new field into burgers table
  insertOne: function(table, name) {
    var queryString = "INSERT INTO ? (burger_name) VALUES (?)";

    console.log(queryString);

    connection.query(queryString, [table, name], function(err, result) {
      console.log(result);
    });
  },
  //update field into burgers table
  updateOne: function(table, id, name, devoured) {
    var queryString = "UPDATE ? SET burger_name = ?, devoured = ? WHERE ID = ?";

    console.log(queryString);

    connection.query(queryString, [table, name, devoured, id], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;