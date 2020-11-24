const express  = require('express');
const router   = express.Router();
const ComSubCom = require('../model/comSubCom');

//Event Create
router.post('/', (req,res) =>{
    const data ={
    subComId:req.body.subComId,
    CompanyID: req.body.CompanyID,
    };
    ComSubCom.create(data)
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get All Events
router.get('/', (req, res) => {
    ComSubCom.findAll()
    .then(event => {
            res.json(event)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get Event by id
router.get('/:id', (req,res)=> {
    ComSubCom.findAll({
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
    ComSubCom.update({
        subComId:req.body.subComId,
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
    ComSubCom.destroy({
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