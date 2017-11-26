'use strict';

const expect = require('expect');
const bitCoinRouter = require('../route/bit-coinRoute.js');

console.log(bitCoinRouter.get());

// bitCoinRouter.get('/api', bearAuth, (req,res,next) => {
//   let dataObj = new Client({'apiKey': 'API Key','apiSecret': 'API SECRET'});
//   dataObj.getSpotPrice({'currencyPair': 'BTC-USD'},function(err,price){
//     const mock = {
//       userId: req.user.id,
//       data: {
//         base: price.data.base,
//         amount: price.data.amount,
//         currency: price.data.currency,
//       }
//     };

//This is a place holder file. Do not touch.
//I will hurt you. - Love, T.Jay