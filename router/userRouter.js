const express = require('express');

const controller = require('../controller/userController');

const router = express.Router();

router.get('/users', controller.getUserData);

router.put('/users', controller.updateUserData);

module.exports = router;
