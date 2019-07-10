var express = require('express');
var ScoutMonth = require('../models/ScoutMonth');
var router = express.Router();

// on routes that end in /pratos
// ----------------------------------------------------
router.route('/last')
    // GET http://localhost:8081/scoutMonth/last
    .get((req, res) => {
        ScoutMonth.find({}, (err, scout) => {
            if (err) {
                res.send(err);
            }
            res.json(scout);
        });
    })
    // POST http://localhost:8081/api/pratos
    .post((req, res) => {
        var pratos = new ScoutMonth();
        //pratos.name = req.body.name;
        //pratos.pic = req.body.typeFood;
        //pratos.description = req.body.ingredients;
        //pratos.date = req.body.ingredients;
        pratos.name = "Name";
        pratos.pic = "Pic";
        pratos.description = "Description";
        pratos.date = Date.now();

        console.log("DDD");
        pratos.save((err) => {
            if (err) {
                res.send(err);
            }
            console.log("EEE");

            res.json({ message: 'Prato criado!' });
        });
    });

module.exports = router;
