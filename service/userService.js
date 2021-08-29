const userDAO = require('../repository/userDAO');
const transaction = require('../repository/transactions/saveHabitLogTransaction');

exports.fetchUser = ({ id }) => userDAO.findById(id);

exports.updateUser = ({ id, data }) => userDAO.updateUser({ id, data });

exports.peneTest = () => transaction(null, null, null);
