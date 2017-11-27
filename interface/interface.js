'use strict';

const bitchingServer = require('../lib/server.js');
const net = require('net');
const server = net.createServer();
const port = 4040;
const chalk = require('chalk');

const bsfunction = module.exports = {};

console.log(chalk.bgBlueBright('Howdy'));

server.on('connection', (socket) => {
  console.log('Server ready to accept incoming connection from User via the Terminal.');
  socket.write('Welcome to BIT-CHING - Please, @signup or @signin - For help using the system, please type in @help.\ncommand:');

  // let user = new Client(socket);

  console.log('The user has logged in.');

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('@signin')){
      socket.write('PLACEHOLDER - Executes sign in route.\n');
      socket.write(chalk.magenta('\nUser Name:'));
      return;
    }
  });

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('@help')){
      socket.write('PLACEHOLDER - lists commands.\n @start - Begins the auto-report utility, \n @stop - Ends the auto-report utility, \n @current - Returns the most current price, \n @data - Returns the aggregate data from the database.\n');
      socket.write(chalk.magenta('\ncommand:'));
      return;
    }
  });

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('@start')){
      socket.write('PLACEHOLDER - runs the npm start watch command.\ncommand:');
      return;
    }
  });

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('@stop')){
      socket.write('PLACEHOLDER - ends the npm start watch command.\ncommand:');
      return;
    }
  });

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('@current')){
      socket.write('PLACEHOLDER - Executes the BTC command to display current price.\ncommand:');
      return;
    }
  });

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('@data')){
      socket.write('PLACEHOLDER - displays bitcoin data stored in the database.\ncommand:');
      return;
    }
  });
});

server.listen(port, () => {
  console.log('Interface actively listening.');
})