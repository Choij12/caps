'use strict';

const client = require('socket.io-client');
const PORT = process.env.PORT || 3001;
const driverClient = client(`http://localhost:${PORT}/caps`);

driverClient.on('join', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  driverClient.emit('in-transit', payload);
});

driverClient.on('delivered', (payload) => {
  console.log(`DRIVER: delivered up ${payload.orderID}`);
});
