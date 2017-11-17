'use strict';

const expect = require('expect');

// Does index.js exist?

describe('Making sure Index.js/Entry Point Exists and responds', () => {
    it('Should Exist', () => {
        let indexEntry = require('../index.js');
        expect(indexEntry).toBeTruthy();
    });
});

describe('Making sure files exists in lib model', () => {
    describe('Making sure all files Exists and responds', () => {
        it('basic-http.js should Exist', () => {
            let basicHttp = require('../lib/basic-http.js');
            expect(basicHttp).toBeTruthy();
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