module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    current_level: {
      type: Sequelize.INTEGER,
    },
    current_experience: {
      type: Sequelize.INTEGER,
    },
    current_streak: {
      type: Sequelize.INTEGER,
    },
  });

  return User;
};
