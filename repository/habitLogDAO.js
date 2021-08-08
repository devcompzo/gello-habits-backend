const HabitLog = require('../database').habitLog;

const createHabitLog = ({ data }) => {
  const datetime = new Date();

  const newLog = {
    achieved: data.achieved,
    habit_habitlog_id: data.habit_habitlog_id,
    createdAt: datetime,
    updatedAt: datetime,
  };

  const newHabitLog = new HabitLog(newLog);
  return newHabitLog.save();
};

const findAll = () => HabitLog.findAll();

const habitLogDAO = {
  findAll,
  createHabitLog,
};

module.exports = habitLogDAO;
