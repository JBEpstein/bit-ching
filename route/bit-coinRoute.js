'use strict';


const Currency = require('../model/bit-coinSchema.js');
const jsonParser = require('body-parser').json();
const bearAuth = require('../lib/bearAuth.js');
const Client = require('coinbase').Client;

const bitCoinRouter = module.exports = require('express').Router();


bitCoinRouter.get('/api', bearAuth, (req,res,next) => {
  let dataObj = new Client({'apiKey': 'API Key','apiSecret': 'API SECRET'});
  dataObj.getSpotPrice({'currencyPair': 'BTC-USD'},function(err,price){
    new Currency(req.body).save(price)
    .then( data => {
      res.status(200).send(price);
    })
    .catch( err => next('shit'));
  });
});
