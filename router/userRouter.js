const express = require('express');

const controller = require('../controller/userController');

const router = express.Router();

router.get('/users/:id', controller.getUserData);

router.put('/users/:id', controller.updateUserData);

router.get('/users-test', controller.penetest);

module.exports = router;
