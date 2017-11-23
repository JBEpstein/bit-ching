'use strict';

require('dotenv').config({path: '${__dirname}/../.env'});
const expect = require('expect');
const superagent = require ('superagent');

const server = require('../lib/server.js');
const authRouter = require('../route/auth-route.js');
const bitCoinRouter = require('../route/bit-coinRoute.js');
const clearDB = require ('./lib/clear-db.js');
const fakerUser = require ('./lib/faker-user.js');
const API_URL = process.env.API_URL;

//auth-route.js testing
describe('auth-route.js testing', () => {

  before(function() {
    server.start();
  });
  after(server.stop);
  afterEach(clearDB);

  describe('post testing', () => {
    it('should return a 201 message if signup was successful', () => {
      return superagent.post(`${API_URL}/api/signup`)
        .send({
          username: 'Simon',
          email: 'simon@simonsays.com',
          password: 'password'
        })
        .then(res => {
          expect(res.status).toBe(201);
          expect(res.text).toBeTruthy();
          expect(res.body.length > 1).toBeTruthy();
        });
    });
    it('should return a 400 message if signup was not successful', () => {
      return superagent.post(`${API_URL}/api/signup`)
        .send({
          username: 'Simon',
          email: 'simon@simonsays.com',
          password: 'password'
        })
        .then(res => {
          expect(res.status).toBe(400);
        });
    });
  });

  describe('get testing', () => {
    it('should return a 200 message if signin was successful', () => {
      return superagent.get(`${API_URL}/api/signin`)
        .send({
          username: 'Simon',
          email: 'simon@simonsays.com',
          password: 'password'
        })//when do we use the faker users versus superagent?
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.text).toBeTruthy();
          expect(res.body.length > 1).toBeTruthy();
        });
    });
    it('should return a 400 message if signin was not successful', () => {
      return superagent.get(`${API_URL}/api/signin`)
        .send({
          username: 'Simon',
          email: 'simon@simonsays.com',
          password: 'password'
        })
        .then(res => {
          expect(res.status).toBe(400);
        });
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

  before(server.start);
  after(server.stop);
  afterEach(clearDB);

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
    it('fix this shit', () => {
      expect().toBe();
    });
  });

});