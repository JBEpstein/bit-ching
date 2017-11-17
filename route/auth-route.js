'use strict';

const authRouter = module.exports = require('express').Router();
const mongoose = require('mongoose');
const basicHttp = require('../lib/basic-http.js');
const jsonParser = require('body-parser').json();
const User = require('../model/userSchema.js');
const bearAuth = require('../lib/bearAuth.js');

authRouter.post('/signup', jsonParser, (req,res,next) => {
  const password = req.body.password;
  delete req.body.password;
  (new User(req.body)).generateHash(password)
  .then( user => {
    user.save()
      .then( user => {
        user.generateTokenSeed()
        res.status(200).send(user)
          })
        .catch(err => res.status(400).send());
      })
  .catch(err => next(err));
});