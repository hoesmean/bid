const Sequelize = require('sequelize');
const table = require('../db/db');

const Tag = table.define('Tag', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    tagName: Sequelize.STRING
});

    module.exports = Tag;