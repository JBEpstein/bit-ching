'use strict';

const jwt = require('jsonwebtoken');
const User = require('../model/userSchema.js');
module.exports = (req,res,next) => {
  if(!req.headers.authorization){
    throw new Error('Please authorize signin');
  }
  let token = req.headers.authorization.split('Bearer ')[1];
  if(!token){
    throw new Error('Invalid authorization');
  }
  let secret = process.env.SECRET;
  let decodedToken = jwt.verify(token, secret);
  req.userId = decodedToken.id;
  User.findOne({_id: req.userId})
  .then( user => {
    console.log(user);
    console.log(req.userId);
    if(!user) res.status(403).send(new Error('no user'));
    req.user = user;

  });
  next();
};
