const Sequelize = require('sequelize');
const table = require('../db/db');

const FollowCompany = table.define('FollowCompany', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    
});

    module.exports = FollowCompany;