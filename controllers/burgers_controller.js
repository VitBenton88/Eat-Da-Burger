var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    res.render("index", burgersObject);
  });
});

router.post("/", function(req, res) {
  burger.create(
    req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {

  var id = req.params.id;
  var newName = req.body.newName;
  var devoured = req.body.devoured;

  console.log("id: ", id);

  burger.update(id, newName, devoured, function() {
    res.redirect("/");
  });
});


module.exports = router;
