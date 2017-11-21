'use strict';


const mongoose = require('mongoose');


const currencySchema = new mongoose.Schema({
  userId: String,
  apiKey: {type:String},
  apiSecret: String,
  version: Date,
  data: {
    base: String,
    amount: Number,
    currency: String,
  }
});


module.exports = mongoose.model('Currency', currencySchema);
