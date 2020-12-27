const express = require("express");


const router = express.Router();



const ctrlUser = require('../controller/userController');

const ctrlAdmin = require('../controller/adminController');

router.get('/chartinfo', ctrlAdmin.getAllCharInfo);
router.post('/saveuser', ctrlUser.saveUser);

router.get('/getUser', ctrlAdmin.getAllUser);

router.get('/getuprevill/:id', ctrlAdmin.getPrevIll);

router.get('/getsymptom/:id', ctrlAdmin.getSymptom);

module.exports = router;