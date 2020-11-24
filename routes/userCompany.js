const express  = require('express');
const router   = express.Router();
const userCompany = require('../model/userCompany');

router.post('/', (req,res) => {
    const data = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        position: req.body.position,
        description: req.body.description,
        UserId: req.body.UserId,
        CompanyId: req.body.CompanyId,
    }
    userCompany.create(data)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/', (req, res) => {
    userCompany.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.get('/:id', (req, res) => {
    userCompany.findAll({
        where: {
            id:req.body.id
        }
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.put('/:id', (req, res) => {
    userCompany.update({
        where: {
            startDate: req.body.startDate,
        endDate: req.body.endDate,
        position: req.body.position,
        description: req.body.description,
        UserId: req.body.UserId,
        CompanyId: req.body.CompanyId,
        }
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

router.delete('/:id', (req, res) => {
    userCompany.destroy({
        where: {
            id:req.body.id
        }
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})



module.exports = router;