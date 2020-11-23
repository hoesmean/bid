const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const relationship = require('./relation')

const cors = require('cors');
const sequelize = require('./db/db');


const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

require('dotenv').config();
const app = express();
 
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { 
            secure: false,
            maxAge: 6000 },
        store: new SequelizeStore({
        db: sequelize,
        }),
      resave: false, // we support the touch method so per the express-session docs this should be set to false
      proxy: true, // if you do SSL outside of node.
    })
    );


app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));


sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
}); 

sequelize.sync()
    .then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    }); 

app.listen(process.env.PORT, () => {
    console.log('work');
})