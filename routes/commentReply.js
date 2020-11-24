const express  = require('express');
const router   = express.Router();
const CommentReply = require('../model/commentReply');

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
    CommentReply.create(postData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get Post
router.get('/', (req,res) => {
    CommentReply.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });
})

//Get Post by id
router.get('/:id', (req,res) => {
    CommentReply.findAll({
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
    CommentReply.update({
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
    CommentReply.destroy({
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