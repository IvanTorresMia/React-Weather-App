var db = require("../../models");
const router = require("express").Router()

router.get("/Weather", function(req, res) {
    db.Weather.findAll({}).then(function(dbWeather) {
      res.json(dbWeather);
    });
  });

// This will be our post route
router.post("/weather", function(req, res) {
    db.Weather.create(req.body).then(function(dbWeather) {
      res.json(dbWeather);
    });
  });

module.exports = router;