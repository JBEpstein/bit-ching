'use strict';

const net = require('net');
const port = 4040;
const server = net.createServer();
//const commands = require('./commands.js');
//const User = require('../model/userSchema.js');

server.on('connection', (socket) => {
  //let user = new User(socket);
  //user.commands(user);

  //user.socket.on('error', err => console.log(err));
  //user.socket.on('disconnect', () => console.log(user.username + ' has left the room.\r'));    
});

server.listen(port, () => {
  console.log('Server up!', port);
});