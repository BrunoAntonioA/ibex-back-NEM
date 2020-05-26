const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');

var ibexController = require('./controllers/ibexController.js');
var sessionController = require('./controllers/sessionController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3020, () => console.log('Server started at port: 3020'));

app.use('/ibexs', ibexController);
app.use('/sessions', sessionController);