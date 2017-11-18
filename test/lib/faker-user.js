'use strict';

const faker = require('faker');
const User = require('../../model/userSchema.js');

const mockUser = module.exports = {};

mockUser.createOne = () => {
  return new User({  
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  });
};


