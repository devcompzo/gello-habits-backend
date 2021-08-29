const db = require('../../database').sequelize;
const habitLogDAO = require('../habitLogDAO');
const userDAO = require('../userDAO');
const levelDAO = require('../levelDAO');

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

const saveHabitLogTransaction = async (habitId, userData, serviceWorkerAnswer) => {
  const t = await db.transaction();

  // Parsing
  const habitLog = {
    achieved: serviceWorkerAnswer,
    habit_habitlog_id: habitId,
  };

  try {
    // Realizar el calculo magico
    // Calcular el streak
    const streak = userStreakCalculation(serviceWorkerAnswer, userData.current_streak);

    // Calcular la experiencia
    const experience = userCurrentExpCalculation(serviceWorkerAnswer, streak,
      userData.current_experience, 100);

    // Calcular el nivel
    const level = await levelDAO.findLevelByGivenExp(experience, { transaction: t });

    // Guardar la nueva data del usuario
    await userDAO.updateUser(userData.id,
      {
        current_streak: streak,
        current_experiencie: experience,
        current_level: level,
      },
      { transaction: t });

    // Guardar el habitLog
    await habitLogDAO.createHabitLog(habitLog, { transaction: t });

    t.commit();
  } catch (error) {
    await t.rollback();
    throw new Error(error);
  }
};

module.exports = saveHabitLogTransaction;
