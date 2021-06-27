const habitDAO = require('../repository/habitsDAO');
const ElementNotFoundException = require('../exceptions/elementNotFoundException');

exports.fetchAllHabits = async () => {
  data = await habitDAO.findAll();
  if (data.length === 0)
    throw new ElementNotFoundException('The habits list is empty')
  return data;
};

exports.fetchHabit = async (id) => {
  data = await habitDAO.findById(id);
  if (!data)
    throw new ElementNotFoundException(`The habit ID ${id} doesn't exists`)
  return data;
};

exports.deleteHabit = async (id) => {
  data = await habitDAO.findById(id);
  if (!data)
    throw new ElementNotFoundException(`The habit ID ${id} doesn't exists`)
  return habitDAO.deleteById(id);
};

exports.updateHabit = async (data, id) => {
  data = await habitDAO.findById(id);
  if (!data)
    throw new ElementNotFoundException(`The habit ID ${id} doesn't exists`)
  return habitDAO.updateHabit(data, id);
};

exports.createHabit = async (data) => {
  return habitDAO.create(data);
};
