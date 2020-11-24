const express  = require('express');
const router   = express.Router();
const EventTimeLine = require('../model/eventTimeLine');

//Event Create
router.post('/', (req,res) =>{
    const data ={
        title: req.body.title,
        description: req.body.description,
        speaker: req.body.speaker,
        image: req,body,image,
        video: req.body.video,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        EventId: req.body.EventId,
    };
    EventTimeLine.create(data)
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get All Events
router.get('/', (req, res) => {
    EventTimeLine.findAll()
    .then(event => {
            res.json(event)
    })
    .catch((err) => {
        console.log(err)
    })
})

//Get Event by id
router.get('/:id', (req,res)=> {
    EventTimeLine.findAll({
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
    EventTimeLine.update({
        title: req.body.title,
        description: req.body.description,
        speaker: req.body.speaker,
        image: req,body,image,
        video: req.body.video,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        EventId: req.body.EventId,
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
    EventTimeLine.destroy({
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