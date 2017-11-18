'use strict';

const bitCoinRouter = module.exports = require('express').Router();
const BitUser = require('../model/bit-coinSchema.js');
const jsonParser = require('body-parser').json();
const bearAuth = require('../lib/bearAuth.js');


bitCoinRouter.post('https://api.cryptonator.com/api/full/btc-usd', jsonParser, bearAuth, (req,res,next) => {
  req.body.userId = req.user._id;
  (new BitUser(req.body)).save()
  .then(res.send.bind(res.status(200).send(res)))
  .catch(next);
});
