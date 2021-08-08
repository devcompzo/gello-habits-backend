const characterCalculation = (serviceWorkerAnswer) => {
  console.log(serviceWorkerAnswer);
};

const userStreakCalculation = (serviceWorkerAnswer, { streak }) => {
  if (serviceWorkerAnswer === true) {
    if (streak < 21) return streak + 1;
  } else {
    if (streak > 3) return streak - 3;
    return 0;
  }
  return 0;
};

const userCurrentExpCalculation = (serviceWorkerAnswer, streak, currentExp, priorityReward) => {
  if (serviceWorkerAnswer === true) {
    return currentExp + (priorityReward * Number.parseInt(streak / 3, 10));
  }
  return currentExp - priorityReward;
};

const clothesCalculation = (serviceWorkerAnswer) => {
  console.log(serviceWorkerAnswer);
};

module.exports = {
  clothesCalculation,
  userCurrentExpCalculation,
  userStreakCalculation,
  characterCalculation,
};
