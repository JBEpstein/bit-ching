'use strict';

const expect = require('expect');

// Does .env and .test.env exist?
describe('Making sure .env and .test.env exists and responds', () => {
  it('Should Exist', () => {
    let dotEnv = require('../.env');
    expect(dotEnv).toBeTruthy();
  });
  it('Should Exist', () => {
    let dotTestDotEnv = require('../.test.env');
    expect(dotTestDotEnv).toBeTruthy();
  });
});