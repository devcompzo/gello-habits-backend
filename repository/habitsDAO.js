const Habit = require('../database').habit;

const findAll = () => Habit.findAll();

const findById = (id) => Habit.findByPk(id);

const deleteById = (id) => Habit.destroy({ where: { id } });

const create = (data) => {
  const newHabit = new Habit(data);
  return newHabit.save();
};

const updateHabit = (data, id) => {
  const updateHabit = {
    title: data.title,
    description: data.description,
    priority: data.priority,
    initial_date: data.initial_date,
    interval: data.interval,
    interval_unit: data.interval_unit,
    notify_5prev: data.notify_5prev,
    notify_10prev: data.notify_10prev,
    notify_15prev: data.notify_15prev,
    disabled: data.disabled,
  };
  return Habit.update(updateHabit, { where: { id } });
};

const habitDAO = {
  findAll,
  findById,
  create,
  deleteById,
};

module.exports = habitDAO;