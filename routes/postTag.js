const express  = require('express');
const router   = express.Router();
const postTag = require('../model/postTag');


router.post('/', (req,res) =>{
    const postTagData = {
        PostId: req.body.PostId,
        TagId: req.body.TagId
    }
    postTag.create(postTagData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/', (req,res) => {
    postTag.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log()
    });
})

router.get('/:id', (req,res) => {
    postTag.findAll({
        where:{
            id:req.params.id
        }
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log()
    });
})

router.put('/:id', (req,res)=>{
    postTag.update({
        PostId: req.body.PostId,
        TagId: req.body.TagId
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.delete('/:id', (req,res)=> {
    postTag.destroy({
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