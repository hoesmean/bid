const Sequelize = require('sequelize');
const table = require('../db/db');

const Image = table.define('Image', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    data: Sequelize.BLOB
});

    module.exports = Image;