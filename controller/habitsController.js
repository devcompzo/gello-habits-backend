const habitsService = require('../service/habitsService');

exports.getAllHabits = (req, res) => {
  //Map the user of the auth in the header
  habitsService.fetchAllHabits()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.status(err.status || 500).send({ name: err.name, message: err.message });
    })
};

exports.getHabit = (req, res) => {
  const { id } = req.params
  habitsService.fetchHabit(id)
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.status(err.status || 500).send({ name: err.name, message: err.message });
    })
};

exports.deleteHabit = (req, res) => {
  const { id } = req.params
  habitsService.deleteHabit(id)
    .then(() => {
      res.status(200).send(null);
    }).catch((err) => {
      res.status(err.status || 500).send({ name: err.name, message: err.message });
    })
};

exports.updateHabit = (req, res) => {
  const { id } = req.params
  const habitData = req.body
  habitsService.updateHabit(habitData, id)
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.status(err.status || 500).send({ name: err.name, message: err.message });
    })
};

exports.createHabit = (req, res) => {
  const habitData = req.body
  habitsService.createHabit(habitData)
    .then((data) => {
      res.status(201).send(data);
    }).catch((err) => {
      res.status(err.status || 500).send({ name: err.name, message: err.message });
    })
};

exports.registerHabitLog = (req, res) => {
  res.send('test');
};

exports.getAllHabitLogs = (req, res) => {
  res.send('test');
};