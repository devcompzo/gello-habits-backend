const HabitLog = require("../database").habitLog;

const createHabitLog = ({ data }) => {
  var datetime = new Date();

  var newLog = {
    achieved: data.achieved,
    habit_habitlog_id: data.habit_habitlog_id,
    createdAt: datetime,
    updatedAt: datetime,
  };

  var newHabitLog = new HabitLog(newLog);
  return newHabitLog.save();
};

const findAll = () => {
  return HabitLog.findAll();
};

var habitLogDAO = {
  findAll: findAll,
  createHabitLog: createHabitLog,
};

module.exports = habitLogDAO;
