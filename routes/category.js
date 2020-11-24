const express  = require('express');
const router   = express.Router();
const Category = require('../model/category');


router.post('/', (req,res) => {
    const CatData = {
        catName: req.body.catName
    }
    Category.create(CatData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/', (req,res)=>{
    Category.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/:id', (req, res)=>{
    Category.findAll({
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

module.exports= router;