'use strict';


const mongoose = require('mongoose');


const currencySchema = new mongoose.Schema({
  base: { type: String },
  target: { type: String },
  price: { type: String },
  volume: { type: String },
  //stretch goal
  // markets: [
  //   { 
  //     market: { type: String },
  //     volume: { type: String },
  //     price: { type: String }  
  //   }
  // ]

  timestamp: { type: Date, require: true },
  success: { type: String },
  error: { type: String }

});

module.exports = mongoose.model('Currency', currencySchema);



