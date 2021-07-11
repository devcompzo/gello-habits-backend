const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const relations = require('./model/relations');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  port: 5432,
  // host: 'ec2-54-198-252-9.compute-1.amazonaws.com',
  host: 'localhost',
  logging: true,

  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.accesory = require('./model/accesory')(sequelize, Sequelize);
db.character = require('./model/character')(sequelize, Sequelize);
db.habit = require('./model/habit')(sequelize, Sequelize);
db.habitLog = require('./model/habitLog')(sequelize, Sequelize);
db.level = require('./model/level')(sequelize, Sequelize);
db.priorityReward = require('./model/priorityReward')(sequelize, Sequelize);
db.user = require('./model/user')(sequelize, Sequelize);

relations(db);

module.exports = db;
