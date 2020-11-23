const Sequelize = require('sequelize');
const table = require('../db/db');

const City = table.define('City', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    city_name: Sequelize.STRING
});

    module.exports = City;