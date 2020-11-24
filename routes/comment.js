const express  = require('express');
const router   = express.Router();
const Comment = require('../model/comment');

//Comment post
router.post('/', (req, res) => {
const postData = {
    title: req.body.title,
    description: req.body.description ,
    like: req.body.like,
    view: req.body.view,
    videoId: req.body.videoId,
    imageId: req.body.imageId,
}
    Comment.create(postData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get Post
router.get('/', (req,res) => {
    Comment.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get Post by id
router.get('/:id', (req,res) => {
    Comment.findAll({
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

// Post Edit
router.put('/:id', (req,res) => {
    Comment.update({
        title: req.body.title,
    description: req.body.description ,
    like: req.body.like,
    view: req.body.view,
    videoId: req.body.videoId,
    imageId: req.body.imageId,
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Post Delete
router.delete('/:id', (req,res) => {
    Comment.destroy({
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