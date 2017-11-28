'use strict';

const sendmail = require('sendmail')();
const sendmailRouter = module.exports = require('express').Router();
const Client = require('coinbase').Client;
const Currency = require('../model/bit-coinSchema.js');
const bearAuth = require('../lib/bearAuth.js');
sendmailRouter.post('/sendmail', bearAuth, (req, res, next) => {

  sendmail({
    from: 'no-reply@bit-ching.com',
    to: 'joel.epstein2@gmail.com',
    replyTo: 'no-reply',
    subject: 'Bit-Ching Buy Alert',
    html: 'This only works at Codefellows because of security set up!'
  }, function (err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });

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
    (new Currency(mock)).save()
  .then( data => {
    if(price.data.amount > 1000){
      res.status(200).send(sendmail());
    }else{
      res.end();
    }
  })
  .catch( err => next(err));
  });
});
