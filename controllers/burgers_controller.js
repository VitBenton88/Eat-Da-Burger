var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all("burgers", function(data) {
    var burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    res.render("index", burgersObject);
  });
});

router.post("/", function(req, res) {
  console.log(req.body);
  burger.create(
    req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {

  var id = req.params.id;
  var devoured = req.body.devoured;

  console.log("Devouring ID: " + id);

  burger.update(id, devoured, function() {
    res.redirect("/");
  });
});


module.exports = router;
