'use strict';

const client = require('socket.io-client');
const PORT = process.env.PORT || 3001;
const vendorClient = client(`http://localhost:${PORT}/caps`);

const orders = { 
  store: 'Coffee shop',
  orderID: '3123',
  customer: 'Jacob',
  address: 'New York, NY'
};

vendorClient.on('delivered', (payload) => {
  console.log(`VENDOR: Delivered your order ${payload.orderID}`);
});

vendorClient.emit('pickup', orders);