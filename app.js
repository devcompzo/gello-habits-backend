const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiRoutes = require('./router/router');

const errorController = require('./controller/errorController');
const notificationsController = require('./controller/pushNotification');

const db = require("./database");
const app = express();

app.use(cors());
app.use(bodyParser.json());

db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.use('/api/v1', apiRoutes);

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.post('/save-subscription', notificationsController.saveSubscription);

app.post('/send-notification', notificationsController.sendNotification);

app.get(errorController);

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Gello Habits sample endpoint, listening port 3000");
    });
  })
  .catch((err) => console.log("Error: " + err));
