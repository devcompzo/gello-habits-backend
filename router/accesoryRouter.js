const express = require('express');

const controller = require('../controller/accesoryController');

const router = express.Router();

router.get('/accesories', controller.getAllAccesories);

router.get('/accesories/:id', controller.getAccesory);

module.exports = router;
