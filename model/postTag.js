const Sequelize = require('sequelize');
const table = require('../db/db');

const PostTag = table.define('PostTag', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    
});

    module.exports = PostTag;