/* eslint no-console: "off" */
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

const datadog = require('./metrics/datadog');

const apiRoutes = require('./router/router');

const errorController = require('./controller/errorController');
const notificationsController = require('./controller/pushNotification');

const { sequelize: db } = require('./database');

// const scheduler = require('./tasks/scheduler');

const app = express();

app.use(cors());
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use(datadog);

app.use('/api/v1', apiRoutes);

app.get('/ping', (req, res) => {
  console.log('pong');
  res.status(200).send('pong');
});

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.post('/save-subscription', notificationsController.saveSubscription);

app.post('/send-notification', notificationsController.sendNotification);

app.get(errorController);

async function main() {
  const port = process.env.PORT || 3000;
  try {
    await db.sync();
    //! Se está quedando pegado en esta instruccion
    // await scheduler.start();
    app.listen(port, () => {
      console.log(`Gello Habits sample endpoint, listening port ${port}`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

main();
