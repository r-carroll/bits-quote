var mongoose = require('mongoose');
// add momemt, use npm install moment --save

var insCardSchema = mongoose.Schema( {
    timestamp : { type: Date, default: Date.now},
    policyNumber : String,
    effectiveDate : Date,
    expirationDate : Date,
    insurer : String

});

module.exports = mongoose.model('InsCard', insCardSchema);