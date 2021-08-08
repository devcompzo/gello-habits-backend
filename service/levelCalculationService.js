const {
  user, character, level, priorityReward, habitLog, habit,
} = require('../database');
const levelDAO = require('../repository/levelDAO');

const characterCalculation = (serviceWorkerAnswer) => {

};

const userStreakCalculation = (serviceWorkerAnswer, { streak }) => {
  if (serviceWorkerAnswer === true) {
    if (streak < 21) return streak++;
  } else {
    if (streak > 3) return streak - 3;
    return 0;
  }
};

const userCurrentExpCalculation = (serviceWorkerAnswer, streak, { currentExp }, { priorityReward }) => {
  if (serviceWorkerAnswer === true) {
    return currentExp + (priorityReward * Number.parseInt(streak / 3, 10));
  }
  return currentExp - priorityReward;
};

const clothesCalculation = (serviceWorkerAnswer) => {

};
