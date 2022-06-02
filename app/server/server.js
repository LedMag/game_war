'use strict';

const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data);
  })
}).listen(2000);
