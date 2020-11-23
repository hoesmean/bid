const Sequelize = require('sequelize');
const table = require('../db/db');

const CommentReply = table.define('CommentReply', {
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

    module.exports = CommentReply ;