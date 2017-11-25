'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const jsonParser = require('body-parser');
const mongodb = require('mongodb');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://bituser:bit123@ds119406.mlab.com:19406/heroku_033v2trx', {useMongoClient: true});

const app = require('express')();

//routes xD
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


module.exports = {
  start: (port, cb) => {
    app.listen(port, cb);
    console.log(`Server is up on PORT ${process.env.PORT}`);
  },
  stop: (cb) => app.close(cb),
};
