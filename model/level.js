module.exports = (sequelize, Sequelize) => {
  const Level = sequelize.define('levels', {
    level: {
      type: Sequelize.INTEGER,
    },
    required_experience: {
      type: Sequelize.INTEGER,
    },
  });

  return Level;
};
