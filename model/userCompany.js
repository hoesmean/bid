const Sequelize = require('sequelize');
const table = require('../db/db');

const userCompany = table.define('userCompany', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    startDate: Sequelize.DATE,
    endDate: Sequelize.INTEGER,
    position: Sequelize.STRING,
    description: Sequelize.STRING
});

    module.exports = userCompany;