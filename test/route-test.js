'use strict';

const expect = require('expect');
const authRoute = require('auth-route.js');
const bitCoinRoute = require('bit-coinRoute.js');


//auth-route.js testing
describe('auth-route.js testing', () => {

  describe('post testing', () => {
    it('should return a 200 message if signup was successful', () => {
      //code to call authRouter here?
      expect(authRouter.post.res.status).toBe(200);
    });
    it('should return a 400 message if signup was not successful', () => {
      //code to call authRouter here?
      expect(authRouter.post.catch.res.status).toBe(400);//I think the expect logic is wrong on my part...
    });
  });

  describe('get testing', () => {
    it('should return a 200 message if signin was successful', () => {
      //code to call authRouter here?
      expect(authRouter.get.res.status).toBe(200);
    });
    it('should return a 400 message if signin was not successful', () => {
      //code to call authRouter here?
      expect(authRouter.get.catch.res.status).toBe(400);
    });

  });
  describe('delete testing', () => {
    it('should return a 200 message if deletion of ID was successful', () => {
      //code to call authRouter here?
      expect(authRouter.delete.res.status).toBe(200);
    });
    //shouldn't there be a fail status for delete?
  });
});

//bit-coinRoute.js testing
describe('bit-coinRoute.js testing', () => {

  describe('post testing', () => {
    it('should return a 200 message if signup was successful', () => {
      expect(bitCoinRouter.post.res.status).toBe(200);
    });
    it('should return a 400 message if signup was not successful', () => {
      expect(bitCoinRouter.post.res.status).toBe(200);
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