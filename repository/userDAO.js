const User = require("../database").user;

const findById = (id) => {
  console.log(id);
  return User.findByPk(id);
};

const updateUser = ({ id, data }) => {
  var datetime = new Date();
  console.log(data);
  var updatedUser = {
    current_level: data.current_level,
    current_experience: data.current_experience,
    current_streak: data.current_streak,
    updatedAt: datetime,
  };
  return User.update(updatedUser, { where: { id: id } });
};

const userDAO = {
  findById,
  updateUser,
};

module.exports = userDAO;
