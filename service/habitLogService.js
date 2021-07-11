const habitLogDAO = require("../repository/habitLogDAO");

exports.createHabitLog = ({ user, data }) => {
  return habitLogDAO.createHabitLog({ data });
};

exports.fetchHabitLogs = () => {
  return habitLogDAO.findAll();
};
