const userDAO = require("../repository/userDAO");

exports.fetchUser = ({ user, id }) => {
  console.log(id);
  return userDAO.findById(id);
};

exports.updateUser = ({ user, id, data }) => {
  console.log(data);
  return userDAO.updateUser({ id, data });
};
