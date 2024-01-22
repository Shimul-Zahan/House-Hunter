const express = require('express');
const getAllUsers = require('../controller/getUser');
const registration = require('../controller/userRegistration');
const loginUser = require('../controller/loginUser');
const addHouse = require('../controller/addHouse');
const router = express.Router();

router.get('/api/registration', getAllUsers);
router.post('/api/registration', registration)
router.post('/api/login', loginUser)
router.post('/api/add-house', addHouse)

module.exports = router;