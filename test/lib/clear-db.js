'use strict';

const User = require('../../userSchema.js');
const Currency = require('../../bit-coinSchema.js');

module.exports = () => {
  return Promise.all(
    [ User.remove({}), Currency.remove({}) ]
  );
};

