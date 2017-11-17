'use strict';

require('dotenv').config();
require('./lib/server').start(process.env.PORT || 3000);