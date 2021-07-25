const cron = require('node-cron');

const task = cron.schedule('3 * * * * *', () => {
  console.log('task');
},
  {
    scheduled: true,
  });

task.start();
