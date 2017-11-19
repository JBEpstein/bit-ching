'use strict';

const expect = require('expect');
const authRoute = require('auth-route.js');
const bitCoinRoute = require('bit-coinRoute.js');


//auth-route.js testing
describe('auth-route.js testing', () => {
  describe('post testing', () => {
    it('', () => {
      expect().toBe();
    });
  });
  describe('get testing', () => {
    it('', () => {
      expect().toBe();
    });
  });
  describe('delete testing', () => {
    it('', () => {
      expect().toBe();
    });
  });
});

//bit-coinRoute.js testing
describe('bit-coinRoute.js testing', () => {
  describe('post testing', () => {
    it('', () => {
      expect().toBe();
    });
  });
  describe('If bit-coinRoute.js GET from DB is successful', () => {
  //testing the data retrieved from DB and formatting data
    it('should return TokenSeed', () => {
      expect(bitCoinRouter).toBeTruthy();//api doesn't work yet so I haven't called yet
    });
    it('response status should return 200', () => {
      expect(bitCoinRouter.res.status).toEqual(200);
    });
  });
  describe('delete testing', () => {
    it('', () => {
      expect().toBe();
    });
  });
});