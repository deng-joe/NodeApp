const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// A promo message to the user
const message = "Black Friday! Get 50% discount on saving your first spot.";
router.get('/messages', function (req, res) {
    res.end(JSON.stringify(message))
});

module.exports = router;
