const Sequelize = require('sequelize');
const table = require('../db/db');

const Users = table.define('User', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    
    name: Sequelize.STRING,
    surname:Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    birthPlace:Sequelize.INTEGER,
    livingPlace:Sequelize.INTEGER,
    birthDay:Sequelize.DATE,
    phoneNumber:Sequelize.STRING,
    gender: Sequelize.STRING,
    highschool: Sequelize.INTEGER,
    college: Sequelize.INTEGER,
    company: Sequelize.INTEGER,
    workStatus: Sequelize.STRING
});

    module.exports = Users;