const express  = require('express');
const router   = express.Router();
const User = require('../model/user');
const verify = require('./verify');

router.get('/',  (req, res) => {
    User.findAll()
    .then(user => {
        res.json(user);
    })
    .catch(err => {console.log(err);})
});

router.get('/:id', (req,res) => {
    User.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(User => {
        res.json(User);
    })
    .catch(err => {
        console.log(err);
    })

});

router.get('/cookie', (req, res)=> {
    res.cookie('name', 'express').send('cookie set'); 
 });

module.exports= router;