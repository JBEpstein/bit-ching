'use strict';

const User = require('../');

//add user to the req object for later user

module.exports = (req, res, next) => {
  const {authorization} = req.headers;

  if(!authorization)
    return next(new Error('unauthorized: no authorization provided.'));

  let encoded =  authorization.split('Basic ')[1];  //splits off user:password
  if(!encoded)
    return next(new Error('unauthorized: no basic auth provided.'));

  let decoded = new Buffer(encoded, 'base64').toString();
  let [username, password] = decoded.split(':');

  if (!username || !password)
    return next(new Error('unauthorized: no username or password provided.'));

  // console.log('decoded: ', decoded);
  // console.log('username: ', username);
  // console.log('password: ', password);  