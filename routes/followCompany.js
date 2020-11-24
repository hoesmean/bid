const express  = require('express');
const router   = express.Router();
const followCompany = require('../model/followCompany');

router.post('/', (req,res) => {
    const data = {
        UserId:req.body.userId,
        CompanyId: req.body.CompanyId,
    }
    followCompany.create(data)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/', (req,res) => {
    followCompany.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/:id', (req,res) => {
    followCompany.findAll({
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
    followCompany.update({
        UserId:req.body.userId,
        CompanyId: req.body.CompanyId,
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log
    });
})

router.delete('/:id', (req,res) => {
    followCompany.destroy({
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