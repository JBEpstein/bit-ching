'use strict';

const User = require('../../model/userSchema.js');
const Currency = require('../../model/bit-coinSchema.js');

module.exports = () => {
  return Promise.all(
    [ User.remove({}), Currency.remove({}) ]
  );
};

