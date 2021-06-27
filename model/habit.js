module.exports = (sequelize, Sequelize) => {
  const Habit = sequelize.define('habits', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    initial_date: {
      type: Sequelize.DATE,
    },
    interval: {
      type: Sequelize.INTEGER,
    },
    interval_unit: {
      type: Sequelize.STRING,
    },
    notify_5prev: {
      type: Sequelize.BOOLEAN,
    },
    notify_10prev: {
      type: Sequelize.BOOLEAN,
    },
    notify_15prev: {
      type: Sequelize.BOOLEAN,
    },
    deleted: {
      type: Sequelize.BOOLEAN,
    },
    disabled: {
      type: Sequelize.BOOLEAN,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
  });

  return Habit;
};
