const express  = require('express');
const router   = express.Router();
const followUser = require('../model/followUser');

router.post('/', (req,res) => {
    const data = {
        userOne:req.body.userOne,
        userTwo:req.body.userTwo,
        status: req.body.status,
    }
    followUser.create(data)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/', (req,res) => {
    followUser.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/:id', (req,res) => {
    followUser.findAll({
        where: {
            id:req.params.id
        }
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.put('/:id', (req,res)=>{
    followUser.update({
        userOne:req.body.userOne,
        userTwo:req.body.userTwo,
        status: req.body.status,
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log
    });
})

router.delete('/:id', (req,res) => {
    followUser.destroy({
        where: {
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