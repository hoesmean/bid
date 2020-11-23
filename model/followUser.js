const Sequelize = require('sequelize');
const table = require('../db/db');

const FollowUser = table.define('FollowUser', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    userOne: Sequelize.INTEGER,
    userTwo: Sequelize.INTEGER,
    status: Sequelize.STRING,
});

    module.exports = FollowUser;