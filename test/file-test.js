'use strict';

const expect = require('expect');

// Does index.js exist?
describe('Making sure Index.js/Entry Point exists and responds', () => {
  it('Should Exist', () => {
    let indexEntry = require('../index.js');
    expect(indexEntry).toBeTruthy();
  });
});

// Does basic-http.js, bearAuth.js, error-message.js, and server.js exist?
describe('Making sure files exists in lib model', () => {
  describe('Making sure all files Exists and responds', () => {
    it('basic-http.js should Exist', () => {
      let basicHttp = require('../lib/basic-http.js');
      expect(basicHttp).toBeTruthy();
    });

    it('bearAuth.js should Exist', () => {
      let bearAuth = require('../lib/bearAuth.js');
      expect(bearAuth).toBeTruthy();
    });

    it('error-message.js should Exist', () => {
      let errorMessage = require('../lib/error-message.js');
      expect(errorMessage).toBeTruthy();
    });

    it('server.js should Exist', () => {
      let server = require('../lib/server.js');
      expect(server).toBeTruthy();
    });
  });
});


// Does bit-coinSchema.js and userSchema.js exist?
describe('Making sure files exists in model model', () => {
  describe('Making sure all files Exists and responds', () => {
    it('userSchema.js should Exist', () => {
      let bitCoinSchema = require('../model/bit-coinSchema.js');
      expect(bitCoinSchema).toBeTruthy();
    });
    it('userSchema.js should Exist', () => {
      let userSchema = require('../model/userSchema.js');
      expect(userSchema).toBeTruthy();
    });
  });
});


// Does auth-route.js, bit-coinRoute.js, and sendmail.js exist?
describe('Making sure files exists in route model', () => {
  describe('Making sure all files Exists and responds', () => {
    it('auth-route.js should Exist', () => {
      let authRoute = require('../route/auth-route.js');
      expect(authRoute).toBeTruthy();
    });
    it('auth-route.js should Exist', () => {
      let bitCoinRoute = require('../route/bit-coinRoute.js');
      expect(bitCoinRoute).toBeTruthy();
    });
    it('sendmail.js should Exist', () => {
      let sendmail = require('../route/sendmail.js');
      expect(sendmail).toBeTruthy();
    });
  });
});