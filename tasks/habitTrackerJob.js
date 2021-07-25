const habits = require('../repository/habitsDAO');
const dayjs = require('dayjs');

const habitTracker = () => {
  habits.findAllAvailableHabits()
    .then((data) => {
      data.forEach(element => {
        calculateHabit(element, 0)

        if (!!element.notificationPrev5) {
          calculateHabit(element, 5)
        }

        if (!!element.notificationPrev10) {
          calculateHabit(element, 10)
        }

        if (!!element.notificationPrev15) {
          calculateHabit(element, 15)
        }
      });
    })

}

const calculateHabit = (element, notificationValue) => {

  const initialDate = element.initialDate;
  const actualTime = dayjs();
  const intervalValue = element.intervalValue;

  actualMoment.diff(, 'm')

  return ((actualTime + notificationValue) - initialDate) % calculateInterval(element.intervalValue, element.intervalUnit);
}

const calculateInterval = (intervalValue, intervalUnit) => {
  return intervalValue * interval[intervalUnit];
}

const interval = {
  hour: 60,
  day: 1440,
  week: 10080,
}