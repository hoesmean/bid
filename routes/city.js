const express  = require('express');
const router   = express.Router();
const City = require('../model/city');

//City Post
router.post('/', (req,res) => {
    const CityData = {
        city_name: req.body.city_name,
        CountryId: req.body.CountryId
    }
    City.create(CityData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get All City
router.get('/', (req,res)=> {
    Country.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get City by id
router.get('/:id', (req,res)=> {
    City.findAll({
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