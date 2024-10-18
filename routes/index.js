var express = require('express');
var router = express.Router();

const fs = require('fs');
const vehiclePlatesData = JSON.parse(fs.readFileSync('vietnameseVehiclePlates.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { vehiclePlates: vehiclePlatesData });

});

module.exports = router;
