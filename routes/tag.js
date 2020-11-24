const express  = require('express');
const router   = express.Router();
const Tag = require('../model/tag');

//Tag Post
router.post('/', (req,res)=>{
    const tagData= {
        tagName: req.body.tagName
    }
    Tag.create(tagData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get All Tag
router.get('/', (req,res)=>{
    Tag.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        conole.log(err)
    });
})

//Get Tag by id
router.get('/:id', (req,res)=> {
    Tag.findAll({
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

//Tag Edit
router.put('/:id', (req,res)=> {
    Tag.update({
        tagName: req.body.tagName
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Tag Delete
router.delete('/', (req,res) => {
    Tag.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(() => {
        res.send('Success')
    }).catch((err) => {
        console.log(err)
    });
})



module.exports= router;