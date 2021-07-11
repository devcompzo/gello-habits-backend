const userDAO = require('../repository/userDAO');

exports.fetchUser = ({ id }) => userDAO.findById(id);

exports.updateUser = ({ id, data }) => userDAO.updateUser({ id, data });
