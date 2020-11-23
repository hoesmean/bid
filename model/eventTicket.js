const Sequelize = require('sequelize');
const table = require('../db/db');

const EventTicket = table.define('EventTicket', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.STRING,
    image: Sequelize.INTEGER,
    video: Sequelize.INTEGER,
});

    module.exports = EventTicket;