const Sequelize = require('sequelize');
const table = require('../db/db');

//Company working with other companies -->  kind of reference
const ComWorkCom = table.define('ComWorkCom', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    comWorkComId: Sequelize.INTEGER
    
});

    module.exports = ComWorkCom;