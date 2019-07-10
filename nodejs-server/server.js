// BASE SETUP
// =============================================================================

// CALL THE PACKAGES
var express = require('express');       // call express
var app = express();                    // define our app using express
var bodyParser = require('body-parser');// call body-parser
var morgan = require('morgan');         // call morgan (used to see requests)
var mongoose = require('mongoose');     // for working with our database
var config = require('./config');       // get our config file
var port = process.env.PORT || 8081;    // set our port
var cors = require('cors');

var ScoutMonthRoutes = require('./app/controllers/ScoutMonthRoutes');

app.use(cors());
// APP CONFIGURATION

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/scoutMonth', ScoutMonthRoutes);

// LOG ALL REQUESTS TO THE CONSOLE
app.use(morgan('dev'));

// CONNECT TO OUR DATABASE
mongoose.connect(config.database, { useMongoClient: true }); // connect to our database

// ROUTES FOR OUR API
// =============================================================================
// get an instance of the express router
var router = express.Router();

// secret variable
app.set('superSecret', config.secret);

// basic route for the home page (accessed at GET http://localhost:8081/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);