'use strict';

require('dotenv').config();
// require('./interface/interface.js');

require('./lib/server').start(process.env.PORT || 3000);

