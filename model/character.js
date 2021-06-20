module.exports = (sequelize, Sequelize) => {
  const Character = sequelize.define('characters', {
    base_color: {
      type: Sequelize.STRING,
    },
    eye: {
      type: Sequelize.INTEGER,
    },
    neck: {
      type: Sequelize.INTEGER,
    },
    head: {
      type: Sequelize.INTEGER,
    },
    hand: {
      type: Sequelize.INTEGER,
    },
    hoodie: {
      type: Sequelize.INTEGER,
    },
  });

  return Character;
};
