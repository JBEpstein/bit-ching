'use strict';


const mongoose = require('mongoose');
const superagent = require('superagent');

const currencySchema = new mongoose.Schema({
  userId: String,
});

// currencySchema.methods.returnData = function(){
//   return new Promise( (resolve,reject) => {
//     this.bitData = generateData(this.userId);
//     this.save()
//   .then( user => {
//     if(!user) reject();
//     resolve(user);
//   });
//   });
// };
//
// const generateData = function(res,req){
//   return superagent.get('https://api.cryptonator.com/api/full/btc-usd')
//   .then( res => {
//     res.text = req.bitData;
//   });
// };
module.exports = mongoose.model('Currency', currencySchema);
