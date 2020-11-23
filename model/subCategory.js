const Sequelize = require('sequelize');
const table = require('../db/db');

const SubCategory = table.define('SubCategory', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    subCatName: Sequelize.STRING
});

    module.exports = SubCategory;