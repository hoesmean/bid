const Sequelize = require('sequelize');
const table = require('../db/db');

const Country = table.define('Country', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    co_name: Sequelize.STRING
});

    module.exports = Country;