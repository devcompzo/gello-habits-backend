const Accessory = require('../database').accessory;

const findByPk = (id) => Accessory.findByPk(id);

const findAll = () => Accessory.findAll();

const AccessoryDAO = {
  findByPk,
  findAll,
};

module.exports = AccessoryDAO;
