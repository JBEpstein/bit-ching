'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bluebird').promisifyAll(require('bcrypt'));
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String, required: true, unique: true
  },
  email: {
    type: String, required: true, unique: true
  },
  password: {
    type: String, required: true, unique: true
  },
  tokenSeed: {
    type: String,
  }
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashAsync(password,10)
  .then( hash => {
    this.password = hash;
    return this;
  });
};

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareAsync(password,this.password)
  .then( res => {
    if(!res) return false;
    return this;
  });
};

userSchema.methods.generateTokenSeed = function(){
  return new Promise( (resolve,reject) => {
    this.tokenSeed = generateToken(this._id)
    this.save()
    .then( user => {
      if(!user) reject();
      resolve(user);
    });
  });
};


const generateToken = function(id){
  return jwt.sign({ id }, process.env.SECRET);
};

module.exports = mongoose.model('User', userSchema);
