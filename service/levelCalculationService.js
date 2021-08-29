const saveHabitLogTransaction = require('../repository/transactions/saveHabitLogTransaction');
const userDAO = require('../repository/userDAO');

/**
 * habitId: INTEGER, PK of habit
 * userId: INTEGER, PK of user
 * answer: BOOL, ServiceWorkerAnswer
 * @param {habitId, userId, answer} serviceWorkerData
 */

exports.calculateLevel = async ({ habitId, userId, answer }) => {
  const user = await userDAO.findById(userId);
  saveHabitLogTransaction(habitId, user, answer);
};
