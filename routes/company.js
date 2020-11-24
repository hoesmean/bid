const express  = require('express');
const Company = require('../model/company');
const router   = express.Router();



//Company Create
router.post('/', (req, res) => {
    const companyData = {
        comName: req.body.comName,
        comEmail: req.body.comEmail,
        comPhoneNumber: req.body.comPhoneNumber,
        comFoundedDate: req.body.comFoundedDate,
        comHeadOffice: req.body.comHeadOffice,
        comAdress: req.body.comAdress,
        comPost: req.body.comPost,
        comSubCategory: req.body.comSubCategory,
        comAbout: req.body.comAbout,
        comImage: req.body.comImage,
        comMediumImage: req.body.comMediumImage,
        comLargeImage: req.body.comLargeImage,
        comProfileImage: req.body.comProfileImage,
        comCoverImage: req.body.comCoverImage,
        comVideo: req.body.comVideo,
        comProducts: req.body.comProducts,
        comStuff: req.body.comStuff,
        comSubCom: req.body.comSubCom,
        comJobPosting: req.body.comJobPosting,
        comRevenu:req.body.comRevenu,
        comWorkCom: req.body.comWorkCom,
    };
    Company.create(companyData)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    });

});

//All Companies Get
router.get('/', (req, res) => {
        Company.findAll()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
});

//Company Get by Id
router.get('/:id', (req, res) => {
    
    Company.findAll({
        where: {
            id: req.params.id
        }
    })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});

//Company Delete
router.delete('/:id', (req,res) => {
    Company.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send('success');
    }).catch((err) => {
        console.log(err);
    });
});

//Company Edit
router.put('/:id', (req,res) => {
    Company.update(
        {
            comName: req.body.comName,
            comEmail: req.body.comEmail,
            comPhoneNumber: req.body.comPhoneNumber,
            comFoundedDate: req.body.comFoundedDate,
            comHeadOffice: req.body.comHeadOffice,
            comAdress: req.body.comAdress,
            comPost: req.body.comPost,
            comSubCategory: req.body.comSubCategory,
            comAbout: req.body.comAbout,
            comImage: req.body.comImage,
            comMediumImage: req.body.comMediumImage,
            comLargeImage: req.body.comLargeImage,
            comProfileImage: req.body.comProfileImage,
            comCoverImage: req.body.comCoverImage,
            comVideo: req.body.comVideo,
            comProducts: req.body.comProducts,
            comStuff: req.body.comStuff,
            comSubCom: req.body.comSubCom,
            comJobPosting: req.body.comJobPosting,
            comRevenu:req.body.comRevenu,
            comWorkCom: req.body.comWorkCom,
        },
        {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send('success');
    }).catch((err) => {
        console.log(err);
    });
});



module.exports= router;