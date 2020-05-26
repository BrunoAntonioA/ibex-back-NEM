/*
const mongoose = require('mongodb').MongoClient;
const uri = "mongodb+srv://postman:123qweasd@solver-ibex-seanq.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoose(uri, { useNewUrlParser: true });
client.connect(err => {
  if(!err)
  console.log("MongoDB connection succeded")
  else
  console.log("err: ", err)
});
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ibex', (err) =>{
    if(!err)
        console.log('MongoDB connection succeded.');
    else
        console.log('Error in DB connection : '+JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;


module.exports = mongoose;