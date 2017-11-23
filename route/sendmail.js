const sendmail = require('sendmail')();
const sendmailRouter = module.exports = require('express').Router();


sendmailRouter.post('/sendmail', (req, res, next) => { 

  sendmail({
    from: 'no-reply@bit-ching.com',
    to: 'missbrandy812@hotmail.com',
    replyTo: 'no-reply',
    subject: 'Bit-Ching Buy Alert',
    html: 'Bit-Ching can send mail now batches!'
  }, function (err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });

  next();
});