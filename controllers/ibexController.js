const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Ibex } = require('../models/ibex');

// => localhost:3000/ibexs/
router.get('/', (req,res) => {
    Ibex.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving Ibex :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req,res) =>{
    console.log(req.param.id);
    if(!ObjectId.isValid(req.params.id)){
        console.log('id isnt valid');
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    
    Ibex.findById(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Ibex :' + JSON.stringify(err, undefined, 2)); }
        res.end(doc);
    });
    
});

router.post('/', (req,res) =>{
    console.log("ibex post")
    var ibex = new Ibex({
        filename: req.body.filename,
        fnctions: req.body.fnctions,
        domains: req.body.domains,
        constraints: req.body.constraints,
        port: req.body.port
    });
    console.log("ibex: ", ibex)
    ibex.save((err, doc) => {
        console.log("hola");
        if (!err) { 
            res.send(doc); 
        }
        else { 
            
            console.log('Error in ibex Save:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    var ibex = new Ibex({
        _id: req.params.id,
        filename: req.body.filename,
        fnctions: req.body.fnctions,
        domains: req.body.domains,
        constraints: req.body.constraints,
        port: req.body.port
    });
    Ibex.findByIdAndUpdate(req.params.id, { $set: ibex}, { new: true }, (err,doc) =>{
        if (!err) { res.send(doc); }
        else { console.log('Error in Ibex Update:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Ibex.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in ibex Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;