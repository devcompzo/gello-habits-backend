userService = require("../service/userService");

exports.getUserData = (req, res) => {
  const id = req.params.id;
  const user = userService
    .fetchUser({ id })
    .then((data) => {
      if (data) res.status(200).send(data);
      else res.status(404);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Paso un peo" });
    });
};

exports.updateUserData = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = userService
    .updateUser({ id, data })
    .then((data) => {
      if (data) res.status(200).send(data);
      else res.status(404);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Paso un peo" });
    });
};
