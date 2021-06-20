const express = require('express');

const controller = require('../controller/characterController');

const router = express.Router();

router.get('/character', controller.getCharacterData);

router.put('/accesories/:id', controller.updateCharacterData);

module.exports = router;
