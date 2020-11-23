const Sequelize = require('sequelize');
const table = require('../db/db');

const Lang = table.define('Lang', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    langcode: Sequelize.STRING,
    country: Sequelize.INTEGER,
    homePage: Sequelize.STRING,
    settings: Sequelize.STRING,
    login: Sequelize.STRING,
    register: Sequelize.STRING
});

    module.exports = Lang;