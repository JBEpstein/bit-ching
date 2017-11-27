'use strict';


const Currency = require('../model/bit-coinSchema.js');
// const jsonParser = require('body-parser').json();
const bearAuth = require('../lib/bearAuth.js');
const Client = require('coinbase').Client;

const bitCoinRouter = module.exports = require('express').Router();


bitCoinRouter.get('/api', bearAuth, (req,res,next) => {
  let dataObj = new Client({'apiKey': 'API Key','apiSecret': 'API SECRET'});
  dataObj.getSpotPrice({'currencyPair': 'BTC-USD'},function(err,price){
    const mock = {
      userId: req.user.id,
      data: {
        base: price.data.base,
        amount: price.data.amount,
        currency: price.data.currency,
      }
    };

    Currency.userId = req.user.id;
    (new Currency(mock)).save() //No its mock.
    .then( result => {
      res.status(200).send(result)
    })
    .catch( err => next(err));
  });
});
