const habitDAO = require('../repository/habitsDAO');

exports.fetchAllHabits = () => {
  console.log('test');
  return habitDAO.findAll();
};

exports.fetchHabit = (user, id) => {
  console.log('test');
  return habitDAO.findById(id);
};

exports.deleteHabit = (user, id) => {
  console.log('test');
  return habitDAO.deleteById(id);
};

exports.createHabit = (user, data) => {
  console.log('test');
  return habitDAO.create(data);
};

exports.updateHabit = (user, data, id) => {
  console.log('test');
  return habitDAO.updateHabit(data, id);
};

