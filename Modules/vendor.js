'use strict';

const parcel = require('../Modules/parcel.js');
const logEvent = require('../Modules/eventLogger');

const orders = { 
  store: 'Coffee shop',
  orderID: '3123',
  customer: 'Jacob',
  address: 'New York, NY'
};

parcel.on('delivered', (payload) => {
  console.log(`VENDOR: Delivered your ${payload.orderID}`);
  logEvent('delivered');
});

parcel.emit('pickup', orders);