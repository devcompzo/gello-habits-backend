const Level = require('../database').level;

const findByLevel = (levelAct) => Level.findByPk({ where: { level: levelAct } });

const findLevelByGivenExp = (exp) => Level.findOne(
  {
    where: {
      required_experience: {
        $ge: exp,
      },
    },
    order: [
      ['required_experience', 'ASC'],
    ],
    limit: 1,
  },
);

const findAll = () => Level.findAll();

const LevelDAO = {
  findByLevel,
  findLevelByGivenExp,
  findAll,
};

module.exports = LevelDAO;
