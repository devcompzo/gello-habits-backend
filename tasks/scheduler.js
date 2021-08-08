const cron = require('node-cron');
const habitTracker = require('./habitTrackerJob');

// THIS IS THE TIME INTERVALS TO EXECUTE THE TRACKING CALCULATION
// 15, 20, 25, 30
// 45, 50, 55, 0

const task = cron.schedule('0,15,20,25,30,45,50,55 * * * *', () => {
  habitTracker();
}, { scheduled: true });

module.exports = task;
