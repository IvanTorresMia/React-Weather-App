var db = require("../models");
var router = require("express").Router()




router.get("/api/Weather", function(req, res) {
    db.Weather.findAll({}).then(function(dbWeather) {
      res.json(dbWeather);
    });
  });

// This will be our post route
router.post("/api/Weather", function(req, res) {
    db.Weather.create(req.body).then(function(dbWeather) {
      res.json(dbWeather);
    }).catch(err => res.status(422).json(err));;
  });

module.exports = router;









// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api/index");

// // adding our api routes that we required
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// module.exports = router;