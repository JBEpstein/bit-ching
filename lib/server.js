'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const jsonParser = require('body-parser');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bitcoin_dev', {useMongoClient: true});

const app = require('express')();

//routes
app.use(jsonParser.json());

app.use(require(__dirname + '/../route/auth-route.js'));

app.use(require(__dirname + '/../route/bit-coinRoute.js'));

app.use(require(__dirname + '/../route/sendmail.js'));

app.use(require(__dirname + '/../route/nodemailer.js'));

//404 messages
app.all('*', (req, res, next) => {
  next({statusCode:404, message:'Not Found'});
});

//errors
app.use(require('./error-message'));


const server = module.exports = {};
server.isOn = false;
server.start = () => {
  return new Promise((resolve, reject) => {
    if (!server.isOn) {
      server.http = app.listen(process.env.PORT, () => {
        server.isOn = true;
        console.log('Server up on port', process.env.PORT);
        resolve();
      });
      return;
    }
    reject(new Error('server already running'));
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (server.http && server.isOn) {
      return server.http.close(() => {
        server.isOn = false;
        resolve();
      });
    }
    reject(new Error('server not running'));
  });
};

