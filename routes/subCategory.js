const express  = require('express');
const router   = express.Router();
const SubCategory = require('../model/subCategory');


router.post('/', (req,res) => {
    const CatData = {
        catName: req.body.catName,
        CategoryId: req.body.CategoryId,
    }
    SubCategory.create(CatData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/', (req,res)=>{
    SubCategory.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/:id', (req, res)=>{
    SubCategory.findAll({
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