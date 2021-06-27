const habitsService = require('../service/habitsService');

exports.getAllHabits = (req, res) => {
  //Map the user of the auth in the header
  const habits = habitsService.fetchAllHabits('MockUSer')
    .then((data) => {
      if (data)
        res.status(200).send(data);
      else
        res.status(404);
    }).catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Paso un peo' });
    })
};

exports.getHabit = (req, res) => {
  const habits = habitsService.fetchAllHabits('MockUSer')
    .then((data) => {
      if (data)
        res.status(200).send(data);
      else
        res.status(404);
    }).catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Paso un peo' });
    })
};

exports.deleteHabit = (req, res) => {
  const habits = habitsService.fetchAllHabits('MockUSer')
    .then(() => {
      if (data)
        res.status(200).send(data);
      else
        res.status(404);
    }).catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Paso un peo' });
    })
};

exports.updateHabit = (req, res) => {
  const habits = habitsService.fetchAllHabits('MockUSer')
    .then((data) => {
      if (data)
        res.status(200).send(data);
      else
        res.status(404);
    }).catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Paso un peo' });
    })
};

exports.createHabit = (req, res) => {
  const habits = habitsService.fetchAllHabits('MockUSer')
    .then((data) => {
      res.status(201).send(data);
    }).catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Paso un peo' });
    })
};

exports.registerHabitLog = (req, res) => {
  res.send('test');
};

exports.getAllHabitLogs = (req, res) => {
  res.send('test');
};