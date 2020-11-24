const express  = require('express');
const router   = express.Router();
const Country = require('../model/country');

//Country Post
router.post('/', (req,res) => {
    const CountryData = {
        co_name: req.body.co_name,
    }
    Country.create(CountryData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get All Country
router.get('/', (req,res)=> {
    Country.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/:id', (req,res)=> {
    Country.findAll({
        where:{
            id:req.params.id
        }
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

module.exports = router;