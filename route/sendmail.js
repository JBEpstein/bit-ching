'use strict';

const sendmail = require('sendmail')();
const sendmailRouter = module.exports = require('express').Router();
const Client = require('coinbase').Client;
const Currency = require('../model/bit-coinSchema.js');
const bearAuth = require('../lib/bearAuth.js');
sendmailRouter.post('/sendmail', bearAuth, (req, res, next) => {

  let dataObj = new Client({'apiKey': 'API Key','apiSecret': 'API SECRET'});
  dataObj.getSpotPrice({'currencyPair': 'BTC-USD'},function(err,price){

    let priceObj = new Client({'apiKey': 'API Key','apiSecret': 'API SECRET'});
    priceObj.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, userPrice) {
        console.log(price);
        console.log(userPrice);
      let mail = function() {
        sendmail({
          from: 'no-reply@bit-ching.com',
          to: 'ryleeandrews73@gmail.com',
          replyTo: 'no-reply',
          subject: 'Bit-Ching Buy Alert',
          html: 'UserId: ' + `${req.user.id}` + ' ' + 'Price of coin: ' + `${price.data.amount}`,
        }, function (err, reply) {
          console.log(err && err.stack);
          console.dir(reply);
        });
      };

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
      if(price.data.amount < userPrice){
        res.status(200).send(mail());
      }else{
        res.end();
      }
    })
      .catch( err => next(err));
    });
  });
});
