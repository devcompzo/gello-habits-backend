const express = require('express');

const router = express.Router();

const accesoryRouter = require('./accesoryRouter');
const characterRouter = require('./characterRouter');
const habitsRouter = require('./habitsRouter');
const userRouter = require('./userRouter');

router.use(accesoryRouter);
router.use(characterRouter);
router.use(habitsRouter);
router.use(userRouter);

module.exports = router;
