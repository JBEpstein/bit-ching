'use strict';

var nodemailer = require('nodemailer');



var router = module.exports = require('express').Router();

router.post('/sayHello', (req, res) => { // handle the route at yourdomain.com/sayHello
 
// function handleSayHello(req, res) {
  // Not the movie transporter!
  var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: process.env.MAIL_USER, // Your email id
      pass: process.env.PASSWORD // Your password
    }
  });

  var text = 'Hello world from \n\n' + req.body.name;

  var mailOptions = {
    from: null, // sender address
    to: 'sgordon834@hotmail.com', // list of receivers
    subject: 'Bit-Ching Buy Alert', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    }
  });
});