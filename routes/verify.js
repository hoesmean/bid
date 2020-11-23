const jwt = require('jsonwebtoken');
const db = require('../db/db');

function auth (req,res,next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401). send('Access Denied');
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();

    }catch (err){
return res.status(400).send('Invalid Token');
    }
    
}


module.exports = auth;