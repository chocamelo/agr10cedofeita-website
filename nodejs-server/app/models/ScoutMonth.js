// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var ScoutMonthSchema = new Schema({
    name: String,
    pic: String,
    description: String,
    date: Date
});

module.exports = mongoose.model('scoutMonth', ScoutMonthSchema);