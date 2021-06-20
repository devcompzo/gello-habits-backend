module.exports = (sequelize, Sequelize) => {
  const PriorityReward = sequelize.define('priority_reward', {
    priority: {
      type: Sequelize.STRING,
    },
    reward: {
      type: Sequelize.INTEGER,
    },
  });

  return PriorityReward;
};
