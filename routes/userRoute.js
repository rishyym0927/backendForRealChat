const express = require('express');
const router = express.Router();
const { findUser, getAllUsers}= require('../controllers/userController');


router.get('/find/:userId', findUser)
router.get('/', getAllUsers)






module.exports = router;


