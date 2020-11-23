const Sequelize = require('sequelize');
const table = require('../db/db');

const Video = table.define('Video', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    data: Sequelize.BLOB
});

module.exports = Video;