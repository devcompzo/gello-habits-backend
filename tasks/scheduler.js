const cron = require('node-cron');

const task = cron.schedule('3 * * * * *', () => {
}, { scheduled: true });

task.start();
