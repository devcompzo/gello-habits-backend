const jwtUtil = require('../utils/jwtUtil');

exports.authenticate = (req, res) => {
  if (req.body.usuario === 'gello' && req.body.contrasena === 'holamundo') {
    const payload = {
      check: true,
    };
    const token = jwtUtil.createToken(payload);
    res.json({
      mensaje: 'Autenticación correcta',
      token,
    });
  } else {
    res.json({ mensaje: 'Usuario o contraseña incorrectos' });
  }
};
