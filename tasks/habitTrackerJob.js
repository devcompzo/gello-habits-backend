const dayjs = require('dayjs');
const habits = require('../repository/habitsDAO');

const interval = {
  hour: 60,
  day: 1440,
  week: 10080,
};

const calculateInterval = (intervalValue, intervalUnit) => intervalValue * interval[intervalUnit];

const calculateHabit = (element, notificationValue) => {
  const actualTime = dayjs();
  const { initialDate, intervalValue, intervalUnit } = element;

  return ((actualTime + notificationValue) - initialDate)
    % calculateInterval(intervalValue, intervalUnit);
};

const habitTracker = () => {
  habits.findAllAvailableHabits()
    .then((data) => {
      data.forEach((element) => {
        if (calculateHabit(element, 0) === 0) {
          console.log('Executed 0');
        }

        if (element.notificationPrev5) {
          if (calculateHabit(element, 5) === 0) {
            console.log('Executed 5');
          }
        }

        if (element.notificationPrev10) {
          if (calculateHabit(element, 10) === 0) {
            console.log('Executed 10');
          }
        }

        if (element.notificationPrev15) {
          if (calculateHabit(element, 15) === 0) {
            console.log('Executed 15');
          }
        }
      });
    });
};

module.exports = habitTracker;
