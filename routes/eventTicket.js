const express  = require('express');
const router   = express.Router();
const EventTicket = require('../model/eventTicket');

//Event Create
router.post('/', (req,res) =>{
    const data ={
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req,body,image,
        video: req.body.video,
        
        
    };
    EventTicket.create(data)
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get All Events
router.get('/', (req, res) => {
    EventTicket.findAll()
    .then(event => {
            res.json(event)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get Event by id
router.get('/:id', (req,res)=> {
    EventTicket.findAll({
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
    EventTicket.update({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req,body,image,
        video: req.body.video,
        
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
    EventTicket.destroy({
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