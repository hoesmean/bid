const Sequelize = require('sequelize');
const table = require('../db/db');

// Company has subcompanies 
const ComSubCom = table.define('ComSubCom', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    subComId: Sequelize.INTEGER
    
});

    module.exports = ComSubCom;