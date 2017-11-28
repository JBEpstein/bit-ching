'use strict';

const expect = require('expect');

// Does index.js exist?
describe('Making sure Index.js/Entry Point exists and responds', () => {
  it('Should exist', () => {
    let indexEntry = require('../index.js');
    expect(indexEntry).toBeTruthy();
  });
});

// Does commands.js and interface.js exist?
describe('Making sure files exists in interface model', () => {
  describe('Making sure all files exists and responds', () => {
    it('commands.js should exist', () => {
      let commandsUI = require('../interface/commands.js');
      expect(commandsUI).toBeTruthy();
    });

    it('interface.js should exist', () => {
      let interfaceUI = require('../interface/interface.js');
      expect(interfaceUI).toBeTruthy();
    });
  });
});

// Does mail.js, basic-http.js, bearAuth.js, error-message.js, mlabdb.js, and server.js exist?
describe('Making sure files exists in lib model', () => {
  describe('Making sure all files exists and responds', () => {
    it('mail.js should exist', () => {
      let mail = require('../lib/automation/mail.js');
      expect(mail).toBeTruthy();
    });
    
    it('basic-http.js should exist', () => {
      let basicHttp = require('../lib/basic-http.js');
      expect(basicHttp).toBeTruthy();
    });

    it('bearAuth.js should exist', () => {
      let bearAuth = require('../lib/bearAuth.js');
      expect(bearAuth).toBeTruthy();
    });

    it('error-message.js should exist', () => {
      let errorMessage = require('../lib/error-message.js');
      expect(errorMessage).toBeTruthy();
    });

    it('mlabdb.js should exist', () => {
      let mlabdb = require('../lib/mlabdb.js');
      expect(mlabdb).toBeTruthy();
    });

    it('server.js should exist', () => {
      let server = require('../lib/server.js');
      expect(server).toBeTruthy();
    });
  });
});


// Does bit-coinSchema.js and userSchema.js exist?
describe('Making sure files exists in model model', () => {
  describe('Making sure all files exists and responds', () => {
    it('userSchema.js should exist', () => {
      let bitCoinSchema = require('../model/bit-coinSchema.js');
      expect(bitCoinSchema).toBeTruthy();
    });

    it('userSchema.js should exist', () => {
      let userSchema = require('../model/userSchema.js');
      expect(userSchema).toBeTruthy();
    });
  });
});


// Does auth-route.js and bit-coinRoute.js exist?
describe('Making sure files exists in route model', () => {
  describe('Making sure all files exists and responds', () => {
    it('auth-route.js should exist', () => {
      let authRoute = require('../route/auth-route.js');
      expect(authRoute).toBeTruthy();
    });

    it('bit-coinRoute.js should exist', () => {
      let bitCoinRoute = require('../route/bit-coinRoute.js');
      expect(bitCoinRoute).toBeTruthy();
    });

    it('nodemailer.js should exist', () => {
      let nodeMailer = require('../route/nodemailer.js');
      expect(nodeMailer).toBeTruthy();
    });

    it('sendmail.js should exist', () => {
      let sendMail = require('../route/sendmail.js');
      expect(sendMail).toBeTruthy();
    });
  });
});