'use strict';

const expect = require('expect');

//These tests exist just to ensure functionality in our testing suite.

//We will test our expect methods - all of them that we use in the full testing suite. To include Mongo
//DB functionality.

//If these tests fail - something is wrong with our testing suite.

//General Tests

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

//Assertion Tests

//Mongo Tests

