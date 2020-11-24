const express  = require('express');
const router   = express.Router();
const ComWorkCom = require('../model/comWorkCom');

//Event Create
router.post('/', (req,res) =>{
    const data ={
    comWorkComId:req.body.comWorkComId,
    CompanyID: req.body.CompanyID,
    };
    ComWorkCom.create(data)
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get All Events
router.get('/', (req, res) => {
    ComWorkCom.findAll()
    .then(event => {
            res.json(event)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get Event by id
router.get('/:id', (req,res)=> {
    ComWorkCom.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(eventid => {
        res.json(eventid)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//Edit Event
router.put('/:id', (req,res) =>{
    ComWorkCom.update({
        comWorkComId:req.body.comWorkComId,
    CompanyID: req.body.CompanyID,
    })
    .then(updateEvent => {
        res.json(updateEvent)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Delete Event
router.delete('/:id', (req, res) => {
    ComWorkCom.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send('success')
    })
    .catch((err) => {
        console.log(err)
    })
})


module.exports = router;