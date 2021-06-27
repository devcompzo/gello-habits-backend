module.exports = (sequelize, Sequelize) => {
  const HabitLog = sequelize.define('habits_logs', {
    achieved: {
      type: Sequelize.BOOLEAN,
    },
  });

  return HabitLog;
};
