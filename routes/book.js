var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');


/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
    Book.find(function(err, resultbooks) {
        if (err) return next(err);
        res.json(resultbooks);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
    Book.findById(req.params.id, function(err, resultbook) {
        if (err) return next(err);
        res.json(resultbook);
    });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
    Book.create(req.body, function(err, resultbook) {
        if (err) return next(err);
        res.json(resultbook);
    });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function(err, resultbook) {
        if (err) return next(err);
        res.json(resultbook);
    });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;