const express  = require('express');
const router   = express.Router();
const jobPost = require('../model/jobPosting');


//jobPost Post
router.post('/', (req,res) => {
    const jobPost = {
    position: req.body.position,
    description: req.body.description,
    skills: req.body.skills,
    place: req.body.place,
    salary: req.body.salary,
    hourSalary:req.body.hourSalarty,
    jobType:req.body.jobType,
    jobLevel:req.body.jobLevel,
    category: req.body.category,
    languages:req.body.language,
    gender: req.body.gender,
    qualification: req.body.qualification,
    experince: req.body.expreince,
    }
    jobPost.create(jobPost)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get All jobPost
router.get('/', (req,res) => {
    jobPost.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get JobPost by id
router.get('/:id', (req,res) => {
    jobPost.findAll({
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

//JobPost Edit
router.put('/:id', (req,res) => {
    jobPost.update({
        position: req.body.position,
    description: req.body.description,
    skills: req.body.skills,
    place: req.body.place,
    salary: req.body.salary,
    hourSalary:req.body.hourSalarty,
    jobType:req.body.jobType,
    jobLevel:req.body.jobLevel,
    category: req.body.category,
    languages:req.body.language,
    gender: req.body.gender,
    qualification: req.body.qualification,
    experince: req.body.expreince,
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//JobPost Delete
router.delete('/:id', (req,res) =>{
    jobPost.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(() => {
        res.send('success')
    }).catch((err) => {
        console.log(err)
    });
})


module.exports = router;