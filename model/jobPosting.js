const Sequelize = require('sequelize');
const table = require('../db/db');

const jobPost = table.define('jobPost', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    position: Sequelize.STRING,
    description: Sequelize.STRING,
    skills: Sequelize.STRING,
    place: Sequelize.INTEGER,
    salary: Sequelize.STRING,
    hourSalary:Sequelize.STRING,
    jobType:Sequelize.STRING,
    jobLevel:Sequelize.STRING,
    category: Sequelize.INTEGER,
    languages:Sequelize.INTEGER,
    gender: Sequelize.STRING,
    qualification: Sequelize.STRING,
    experince: Sequelize.STRING,

});

    module.exports = jobPost;