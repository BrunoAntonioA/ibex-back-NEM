
const mongoose = require('mongoose');


var Session = mongoose.model('Session', {
    ibexId: String
});

module.exports = { Session } ; 