const express  = require('express');
const router   = express.Router();
const User = require('../model/user');
//const verify = require('./verify');



//Get All User
router.get('/',  (req, res) => {
    User.findAll()
    .then(user => {
        res.json(user);
    })
    .catch(err => {console.log(err);})
});

//Get Single User
router.get('/:id', (req,res) => {
    User.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(User => {
        res.json(User);
    })
    .catch(err => {
        console.log(err);
    })

});

//Edit User
router.put('/:id', (req,res) => {
    User.update({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        birthPlace: req.body.birthPlace,
        livingPlace: req.body.livingPlace,
        birtday: req.body.birtday,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        highschool: req.body.highschool,
        college: req.body.college,
        company: req.body.company,
        workStatus: req.body.workStatus,

    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send('success');
    }).catch((err) => {
        console.log(err);
    });
})

//Delete User
router.delete('/:id', (req,res) => {
    User.destroy({
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


module.exports= router;