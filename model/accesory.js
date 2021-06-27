module.exports = (sequelize, Sequelize) => {
  const Accesory = sequelize.define('Accesories', {
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    required_level: {
      type: Sequelize.INTEGER,
    },
    asset_link: {
      type: Sequelize.STRING,
    },
    deleted: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Accesory;
};
