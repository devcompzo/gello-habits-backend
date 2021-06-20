const express = require('express');

const apiRoutes = require('./router/router');

const errorController = require('./controller/errorController');

const app = express();
const { sequelize } = require('./database');

const db = sequelize;

db.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use('/api/v1', apiRoutes);

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.get(errorController);

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Gello Habits sample endpoint, listening port 3000');
    });
  })
  .catch((err) => console.log(`Error: ${err}`));
