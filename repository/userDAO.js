const User = require('../database').user;

const findById = (id) => User.findByPk(id);

const updateUser = ({ id, data }) => {
  const datetime = new Date();
  const updatedUser = {
    current_level: data.current_level,
    current_experience: data.current_experience,
    current_streak: data.current_streak,
    updatedAt: datetime,
  };
  return User.update(updatedUser, { where: { id } });
};

const userDAO = {
  findById,
  updateUser,
};

module.exports = userDAO;
