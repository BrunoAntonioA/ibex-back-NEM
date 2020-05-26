const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Session } = require('../models/session');

// => localhost:3000/sesions
router.get('/', (req,res) => {
    Session.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving session :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req,res) =>{
    console.log(req.param.id);
    if(!ObjectId.isValid(req.params.id)){
        console.log('id isnt valid');
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    
    Session.findById(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving session :' + JSON.stringify(err, undefined, 2)); }
        res.end(doc);
    });
});


router.post('/', (req,res) =>{
    var session = new Session({
        ibexId: req.body.ibexId
    });
    console.log("entra")<
    session.save((err, doc) => {
        if (!err) { 
            console.log("entrax2")
            res.send(doc); 
        }
        else { 
            
            console.log('Error in session Save:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
        var session = new Session({
            _id: req.params.id,
            ibexId: req.body.ibexId
        });
    session.findByIdAndUpdate(req.params.id, { $set: session}, { new: true }, (err,doc) =>{
        if (!err) { res.send(doc); }
        else { console.log('Error in session Update:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Session.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in session Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;