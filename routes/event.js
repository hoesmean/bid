const express  = require('express');
const router   = express.Router();
const Event = require('../model/event');

//Event Create
router.post('/', (req,res) =>{
    const eventData ={
    title: req.body.title,
    description: req.body.description,
    place: req.body.place,
    like: req.body.like,
    view: req.body.view,
    videoId: req.body.videoId,
    imageId: req.body.imageId,
    isJoin: req.body.isJoin,
    isJoinCompany: req.body.isJoinCompany,
    sponsors: req.body.sponsors,
    category: req.body.category,
    email: req.body.email,
    phone: req.body.phone,
    venue: req.body.venue,
    ticketsold: req.body.ticketsold,
    ticketleft: req.body.ticketleft,
    };
    Event.create(eventData)
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get All Events
router.get('/', (req, res) => {
    Event.findAll()
    .then(event => {
            res.json(event)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get Event by id
router.get('/:id', (req,res)=> {
    Event.findAll({
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
    Event.update({
    title: req.body.title,
    description: req.body.description,
    place: req.body.place,
    like: req.body.like,
    view: req.body.view,
    videoId: req.body.videoId,
    imageId: req.body.imageId,
    isJoin: req.body.isJoin,
    isJoinCompany: req.body.isJoinCompany,
    sponsors: req.body.sponsors,
    category: req.body.category,
    email: req.body.email,
    phone: req.body.phone,
    venue: req.body.venue,
    ticketsold: req.body.ticketsold,
    ticketleft: req.body.ticketleft,
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
    Event.destroy({
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