const express = require('express');

const router = express.Router();

const accesoryRouter = require('./accesoryRouter');
const characterRouter = require('./characterRouter');
const habitsRouter = require('./habitsRouter');
const userRouter = require('./userRouter');

const authorizationMid = require('../middleware/authorizate');

router.use(authorizationMid, userRouter);
router.use(authorizationMid, accesoryRouter);
router.use(authorizationMid, characterRouter);
router.use(authorizationMid, habitsRouter);

module.exports = router;
