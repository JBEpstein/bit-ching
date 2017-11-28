'use strict';

const authRouter = module.exports = require('express').Router();
const mongoose = require('mongoose');
const basicHttp = require('../lib/basic-http.js');
const jsonParser = require('body-parser').json();
const User = require('../model/userSchema.js');


authRouter.post('http://www.bit-ching.me/signup', jsonParser, (req,res,next) => {
  console.log('ASDSADSADASDSADSDASDDASDASKJWSEKHFSHFKHSKGSRKHGKSRHDASDA');
  const password = req.body.password;
  delete req.body.password;
  (new User(req.body)).generateHash(password)
    .then( user => {
      user.save()
    .then( user => {
      res.status(200).send(user.generateToken())
      .catch(err => res.status(400).send(err));
    })
    .catch(next);
    });
});

authRouter.get('/signin', basicHttp, (req,res,next) => {
  User.findOne({username: req.auth.username})
    .then( user => {
      user.comparePassword(req.auth.password)
        .then( user => {
          res.status(200).send(user);
        })
        .catch(err => res.status(400).send());
    })
    .catch( err => next(err));
});

authRouter.delete('/quitBit-ching/:id', (req,res,next) => {
  User.findOne({_id: req.params.id})
    .then( user => {
      User.remove({id: req.params.id})
        .then( () => {
          res.status(200).send('successful delete');
        })
        .catch(next);
    })
    .catch(next);
});
