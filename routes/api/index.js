var db = require("../../models");


// module.exports = function(app) {

router.get("api/Weather", function(req, res) {
    db.Weather.findAll({}).then(function(dbWeather) {
      res.json(dbWeather);
    });
  });

// This will be our post route
router.post("api/Weather", function(req, res) {
    db.Weather.create(req.body).then(function(dbWeather) {
      res.json(dbWeather);
    }).catch(err => res.status(422).json(err));;
  });


// }
