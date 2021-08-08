const habitDAO = require('../repository/habitsDAO');
const ElementNotFoundException = require('../exceptions/elementNotFoundException');

exports.fetchAllHabits = async () => {
  const dbObj = await habitDAO.findAll();
  if (dbObj.length === 0) {
    throw new ElementNotFoundException('The habits list is empty');
  }
  return dbObj;
};

exports.fetchHabit = async (id) => {
  const dbObj = await habitDAO.findById(id);
  if (!dbObj) {
    throw new ElementNotFoundException(`The habit ID ${id} doesn't exists`);
  }
  return dbObj;
};

exports.deleteHabit = async (id) => {
  const dbObj = await habitDAO.findById(id);
  if (!dbObj) {
    throw new ElementNotFoundException(`The habit ID ${id} doesn't exists`);
  }
  return habitDAO.deleteById(id);
};

exports.updateHabit = async (data, id) => {
  const dbObj = await habitDAO.findById(id);
  if (!dbObj) {
    throw new ElementNotFoundException(`The habit ID ${id} doesn't exists`);
  }
  return habitDAO.updateHabit(data, id);
};

exports.createHabit = async (data) => habitDAO.create(data);
