const Habit = require('../database').habit;
const { Op } = require('sequelize');

const findAll = () => Habit.findAll();

const findAllAvailableHabits = () => {
  return Habit.findAll({
    where: {
      [Op.and]: [{ disabled: false }, { deleted: false }]
    }
  })
}

const findById = (id) => Habit.findByPk(id);

const deleteById = (id) => Habit.destroy({ where: { id } });

const create = (data) => {
  const newHabit = new Habit(data);
  return newHabit.save();
};

const updateHabit = (data, id) => {
  const obj = {
    ...data,
  };
  return Habit.update(obj, { where: { id } });
};

const habitDAO = {
  findAll,
  findAllAvailableHabits,
  findById,
  create,
  updateHabit,
  deleteById,
};

module.exports = habitDAO;
