'use strict';

require('dotenv').config();
require('./lib/server.js').start(process.env.PORT || 3000);

const bitchingUI = require('./interface/interface.js');



