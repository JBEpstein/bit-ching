'use strict';

const expect = require('expect');

describe('true should equal true', () => {
  it('SHould be the same', () => {
    expect(true).toBe(true);
  });
});

describe('true should not equal false', () => {
  it('SHould not be the same', () => {
    expect(true).not.toBe(false);
  });
});

// true should equal true

// My user model should return name, password, date