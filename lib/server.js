'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const jsonParser = require('body-parser');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bitcoin_dev', {useMongoClient: true});
require('dotenv').config();
const app = require('express')();

//routes
app.use(jsonParser.json());

app.use(require(__dirname + '/../route/auth-route.js'));

app.use(require(__dirname + '/../route/bit-coinRoute.js'));

app.use(require(__dirname + '/../route/sendmail.js'));

//404 messages
app.all('*', (req, res, next) => {
  next({statusCode:404, message:'Not Found'});
});
//errors
app.use(require('./error-message'));

module.exports = {
  start: (port, cb) => {
    app.listen(port, cb);
    console.log(`Server is up on PORT ${process.env.PORT}`);
  },
  stop: (cb) => app.close(cb),
};
