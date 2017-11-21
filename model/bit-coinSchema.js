'use strict';


const mongoose = require('mongoose');


const currencySchema = new mongoose.Schema({
  userId: {type:String},
  apiKey: {type:String},
  apiSecret: String,
  version: Date,
});


module.exports = mongoose.model('Currency', currencySchema);
