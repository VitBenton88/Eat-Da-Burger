var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.insertOne("burgers", name, function(res) {
      cb(res);
    });
  },
  update: function(id, name, devoured, cb) {
    orm.updateOne("burgers", id, name, devoured, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;