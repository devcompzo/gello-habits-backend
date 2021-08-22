const userService = require('../service/userService');

exports.getUserData = (req, res) => {
  const { id } = req.params;
  userService
    .fetchUser({ id })
    .then((data) => {
      if (data) res.status(200).send(data);
      else res.status(404).send();
    })
    .catch(() => res.status(500).send({ message: 'Paso un peo' }));
};

exports.updateUserData = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  userService
    .updateUser({ id, data })
    .then((result) => {
      if (result) res.status(200).send(result);
      else res.status(404).send();
    })
    .catch(() => {
      res.status(500).send({ message: 'Paso un peo' });
    });
};
