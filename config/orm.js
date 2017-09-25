var connection = require("./connection.js");

var orm = {
	//select from all in burgers table
  selectAll: function(table, cb) {
    var vals = [table];
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //insert new field into burgers table
  insertOne: function(table, cols, name, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    var vals = [table, cols, name];

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //update field into burgers table
  updateOne: function(table, cols, id, devouredVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ID = ?";

    var vals = [table, cols, devouredVal, id];

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;