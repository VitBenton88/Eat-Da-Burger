var orm = require("../config/orm.js");

var burger = {
  all: function(table, cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.insertOne("burgers", "burger_name", name, function(res) {
      cb(res);
    });
  },
  update: function(id, devouredVal, cb) {
    orm.updateOne("burgers", "devoured", id, 1, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;