module.exports = (sequelize, Sequelize) => {
  const Character = sequelize.define('characters', {
    base_color: {
      type: Sequelize.STRING,
    },
    eye: {
      type: Sequelize.INTEGER,
    },
  });

  return Character;
};
