'use strict';

const expect = require('expect');
const fakerUser = require('./lib/faker-user.js');


describe('fake data to come back when calling fakerUser', () => {
  it('should have fake data', () =>{
    let infoMain = fakerUser.createOne();
    console.log(infoMain);
    expect(infoMain.username).toBeTruthy();
    expect(infoMain.password).toBeTruthy();
    expect(infoMain.email).toBeTruthy();
  });
});