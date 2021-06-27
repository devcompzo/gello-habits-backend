const Habit = require("../database").habit;

const findAll = () => {
  console.log(Habit);

  return Habit.findAll();
};

const findById = (id) => Habit.findByPk(id);

const deleteById = (id) => Habit.destroy({ where: { id } });

const create = (data) => {
  const newHabit = new Habit(data);

  return newHabit.save();
};

// const updateHabit = (data, id) => {

//   const updateHabit = {

//     title: gig.title,

//     technologies: gig.technologies,

//     description: gig.description,

//     budget: gig.budget,

//     contact_email: gig.contact_email,

//   };

//   return Habit.update(updateHabit, { where: { id } });

// };

const habitDAO = {
  findAll,

  findById,

  create,

  deleteById,
};

module.exports = habitDAO;
