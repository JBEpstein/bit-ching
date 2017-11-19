'use strict';


const Currency = require('../model/bit-coinSchema.js');
const jsonParser = require('body-parser').json();
const bearAuth = require('../lib/bearAuth.js');

const bitCoinRouter = module.exports = require('express').Router();


bitCoinRouter.post('/api', jsonParser, (req,res,next) => {
  
});
bitCoinRouter.get('/api', jsonParser, (req, res, next) => {


  BitUser.findOne({userId: req.user._id})
.then( user => {
  res.bind.send(res.status(200).send(user));
})
.catch(next);
  // let info = req.body;
  // console.log(info);
  // next();
  // return superagent
  // .get('https://api.cryptonator.com/api/full/btc-usd')
  // .then(function (err, res) { console.log(res.text); });
  // .auth('test', 'guest')
  // .then(res => {
  //   let decoded = jwt.verify(res.text, 'testsecret');
  //   expect(decoded.id.length).not.toBe(0);
  //   return User.findOne({username: 'test'})
  //     .then(user => expect(user._id.toString()).toBe(decoded.id));
  });
// });
// bitCoinRouter.post('https://api.cryptonator.com/api/full/btc-usd', jsonParser, bearAuth, (req,res,next) => {
//   req.body.userId = req.user._id;
//   (new BitUser(req.body)).save()
//     .then(res.send.bind(res.status(200).send(res)))
//     .catch(next);
// });

// bitCoinRouter.get('/currency', (req, res, next) => {
//   let findObj = req.query || {};
//   BitUser.find(findObj)
//     .then(bitUsers => res.send(bitUsers))
//     .catch(err => next({error: err}));
// });
