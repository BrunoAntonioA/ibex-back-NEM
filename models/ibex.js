
const mongoose = require('mongoose');

var Ibex = mongoose.model('Ibex', {
    filename: String,
    fnctions: [],
    domains: [],
    constraints: [],
    port: int
});

module.exports = { Ibex } ; 