const Sequelize = require('sequelize');

const sequelize = new Sequelize('html', 'root', 'root', {
    host: '127.0.0.1',
    dialect:'mysql',
    port:'8889' ,
    storage: "./session.sqlite",
});


module.exports = sequelize;