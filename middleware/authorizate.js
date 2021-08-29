const express = require('express');
const jwt = require('jsonwebtoken');
const jwtUtil = require('../utils/jwtUtil');

const protectedRouter = express.Router();

protectedRouter.use((req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtUtil.secret, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: err });
      }
      req.decoded = decoded;
      return next();
    });
  } else {
    res.send({
      mensaje: 'Token no proveída.',
    });
  }
});

module.exports = protectedRouter;
