const Sequelize = require('sequelize');
const table = require('../db/db');

const Comment = table.define('Comment', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    like: Sequelize.INTEGER,
    view: Sequelize.INTEGER,
    videoId: Sequelize.INTEGER,
    imageId: Sequelize.INTEGER

});

    module.exports = Comment ;