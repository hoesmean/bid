const Sequelize = require('sequelize');
const table = require('../db/db');

const Event = table.define('Event', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    place: Sequelize.INTEGER,
    like: Sequelize.INTEGER,
    view: Sequelize.INTEGER,
    videoId: Sequelize.INTEGER,
    imageId: Sequelize.INTEGER,
    isJoin: Sequelize.INTEGER,
    isJoinCompany: Sequelize.INTEGER,
    sponsors: Sequelize.INTEGER,
    category: Sequelize.INTEGER,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    venue: Sequelize.INTEGER,
    ticketsold: Sequelize.INTEGER,
    ticketleft: Sequelize.INTEGER,
});

    module.exports = Event ;