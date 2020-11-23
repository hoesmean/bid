const Sequelize = require('sequelize');
const table = require('../db/db');

const EventTimeline = table.define('EventTimeline', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    speaker: Sequelize.STRING,
    image: Sequelize.INTEGER,
    video: Sequelize.INTEGER,
    startTime: Sequelize.TIME,
    endTime: Sequelize.TIME,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
});

    module.exports = EventTimeline ;