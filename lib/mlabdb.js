'use strict'

const mongoose = require('mongoose');

const uri = 'mongodb://bituser:bit123@ds119406.mlab.com:19406/heroku_033v2trx';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  let 
});