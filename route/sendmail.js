'use strict';

const sendmail = require('sendmail')();
const sendmailRouter = module.exports = require('express').Router();


sendmailRouter.post('/sendmail', (req, res, next) => { 

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

  next();
});