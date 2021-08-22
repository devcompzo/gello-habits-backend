const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET;

exports.secret = secret;

exports.createToken = (payload) => jwt.sign(payload, secret, {
  expiresIn: 3600,
});
