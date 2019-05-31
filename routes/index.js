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

// Get the list of destinations, convert it to JSON and send it back to the client
router.get('/destination', function (req, res) {
    const count = req.query.count !== undefined ? req.query.count : req.query.count = 100;
    if (req.query.country) {
        const countrySpots = destinations.filter(function (destination) {
            return destination.country === req.query.country
        });
        res.end(JSON.stringify(countrySpots.slice(0, count)))
    }
    res.end(JSON.stringify(destinations.slice(0, count)))
});

// Get one particular destination using ID
router.get('/destination/:id', function (req, res) {
   for (let i = 0; i < destinations.length; i++) {
       if (destinations[i].id === req.params.id) {
           res.end(JSON.stringify(destinations[i]))
       }
   }
});

// Create a destination and add it to existing destinations list
router.post('/destination', function (req, res) {
    const newDestination = {
        "city": req.body.city,
        "description": req.body.description,
        "country": req.body.country,
        "id": pos + 1
    };

    pos++;
    destinations.push(newDestination);
    res.status(201).end(JSON.stringify(newDestination))
});

// Arbitrary ID manager
let pos = 5;

// Initializing destinations array
const destinations = [
    {
        "id": 1,
        "city": "Nairobi",
        "description": "The city of cool waters",
        "country": "Kenya"
    },
    {
        "id": 2,
        "city": "Juba",
        "description": " A city where the Nile passes through",
        "country": "South Sudan"
    },
    {
        "id": 3,
        "city": "Kampala",
        "description": " A city on hills",
        "country": "Uganda"
    },
    {
        "id": 4,
        "city": "Dar-es-Salaam",
        "description": " A haven of peace",
        "country": "Tanzania"
    },
    {
        "id": 5,
        "city": "Addis Ababa",
        "description": " New flower",
        "country": "Ethiopia"
    }
];

module.exports = router;
