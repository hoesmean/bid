const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const table = require('../db/db');

const Company = table.define('Company', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    comName: Sequelize.STRING,
    comEmail: Sequelize.STRING,
    comPhoneNumber: Sequelize.STRING,
    comFoundedDate: Sequelize.DATE,
    comHeadOffice: Sequelize.INTEGER,
    comAdress: Sequelize.STRING,
    comPost: Sequelize.INTEGER,
    comSubCategory: Sequelize.INTEGER,
    comAbout: Sequelize.STRING,
    comImage: Sequelize.INTEGER,
    comMediumImage: Sequelize.INTEGER,
    comLargeImage: Sequelize.INTEGER,
    comProfileImage: Sequelize.INTEGER,
    comCoverImage: Sequelize.INTEGER,
    comVideo: Sequelize.INTEGER,
    comProducts: Sequelize.INTEGER,
    comStuff: Sequelize.INTEGER,                      // Company total stuff
    comSubCom: Sequelize.INTEGER,                     // Company Sub Company Relation
    comJobPosting: Sequelize.INTEGER,
    comRevenu: Sequelize.INTEGER,
    comWorkCom: Sequelize.INTEGER,                    // Companies work with other companies relation

});


    module.exports = Company;