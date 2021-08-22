const express = require('express');

const controller = require('../controller/authController');

const router = express.Router();

router.post('/authenticate', controller.authenticate);

module.exports = router;
