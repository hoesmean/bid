const express  = require('express');
const router   = express.Router();
const user = require('../model/user');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');



router.post('/signup', [ 
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })
], (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
}
    const register = user.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(register => {
        if(!register) {
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                userData.password = hash
                user.create(userData)
                .then(user => {
                    res.json({status: user.email})
                })
            .catch(err => {
                return res.send('error:' + err)
            })
        })
        }
        else{
            return res.json({error: 'User already exists'})
        }
    })
    .catch(err => {
        return res.send('error:' + err)
        })
});


router.post('/signin', 
[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const email = req.body.email;
    const password= req.body.password;
    user.findOne({
        where: { email: email}
        })
    .then(user => { 
    if (!user) {
        return res.status(404).json({ msg: 'invialid email'});
    }
    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res.status(400).json({ msg: 'invalid password'});
    }
    res.redirect('/api/users');
    })
    .catch (err => {
        console.log(err);
    })
    //const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
    //return res.cookie('cookies',token, user, { httpOnly:true });
});


router.get('/signOut');




module.exports= router;