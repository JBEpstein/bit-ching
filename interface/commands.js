'use strict';

//const User = require('../model/userSchema.js');

User.prototype.welcome = function (user) {
  user.socket.write('Welcome ' + user.username + '!\r');
  user.socket.write('Type @help for a list of commands.\r');
};

//Type @help to use
User.prototype.help = function (user, text) {
  if (text.startsWith('@help')) {
    user.socket.write('Type @username to update your username.');
    user.socket.write('Type @help for a list of commands.');    
    user.socket.write('Type @start to start tracking bitcoin rates.');
    user.socket.write('Type @stop to stop tracking bitcoin rates.');
    user.socket.write('Type @fetch for the current bitcoin rate.');
    user.socket.write('Type @stored for the list of bitcoin rates from initiated start date.');    
    user.socket.write('Type @quit to logout.');
  }
};

//Type @username to use
User.prototype.username = function (user, text) {
  let previousUsername = user.username;
  if (text.startsWith('@username')) {
    user.socket.username = text.split(' ')[1].trim();
    user.socket.write(previousUsername + ' have changed your username to ' + user.username + '\r');
  }
};

//Type @start to use
User.prototype.start = function (user, text) {
  if (text.startsWith('@start')) {
    //some code to run api?
    user.socket.write('message regarding bitcoin data collection has started');
  }
};

//Type @stop to use
User.prototype.stop = function (user, text) {
  if (text.startsWith('@stop')) {
    //some code to stop api?
    user.socket.write('message regarding bitcoin data collection has stopped');
  }
};

//Type @fetch to use
User.prototype.fetch = function (user, text) {
  if (text.startsWith('@start')) {
    //some code to fetch current bitcoin rate?
    user.socket.write('message regarding current bitcoin rate');
  }
};

//Type @stored to use
User.prototype.stored = function (user, text) {
  if (text.startsWith('@stored')) {
    //some code to write all the bitcoin rates from when start was initiated
    user.socket.write('message regarding bitcoin data from when start was initiated');
  }
};

//Type @quit to logout
User.prototype.quit = function (user, text) {
  if (text.startsWith('@quit')) {
    user.socket.write(user.username + ' has logged out.\r');
  }
  user.socket.destroy();
};

User.prototype.help = function(user) {
  user.welcome(user);

  user.socket.on('data', (buffer) => {
    let text = buffer.toString();
    user.username(user, text);
    user.help(user, text);
    user.start(user, text);
    user.stop(user, text);
    user.fetch(user, text);
    user.stored(user, text);
    user.quit(user, text);
  });
};

module.exports = User;