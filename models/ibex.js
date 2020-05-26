
const mongoose = require('mongoose');

var Ibex = mongoose.model('Ibex', {
    filename: String,
    fnctions: [],
    domains: [],
    constraints: []
});

module.exports = { Ibex } ; 