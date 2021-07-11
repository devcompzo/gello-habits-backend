const habitLogDAO = require('../repository/habitLogDAO');

exports.createHabitLog = ({ data }) => habitLogDAO.createHabitLog({ data });

exports.fetchHabitLogs = () => habitLogDAO.findAll();
