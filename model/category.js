const Sequelize = require('sequelize');
const table = require('../db/db');

const Category = table.define('Category', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    catName: Sequelize.STRING
});

    module.exports = Category;