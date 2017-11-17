'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/_dev', {useMongoClient: true});

const app = require('express')();

//routes
// app.use(require(__dirname + '/../'));

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