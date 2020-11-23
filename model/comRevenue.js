const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const table = require('../db/db');

const ComRevenue = table.define('ComRevenue', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    revenue: Sequelize.STRING,
    revYear: Sequelize.DATE,
});

    module.exports = ComRevenue ;