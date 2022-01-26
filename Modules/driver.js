'use strict';

const parcel = require('../Modules/parcel.js');
const logEvent = require('../Modules/eventLogger');

parcel.on('pickup', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);

  parcel.emit('in-transit', payload);
});

parcel.on('in-transit', (payload) => {
  logEvent('in-transit');
  console.log(`DRIVER: delivered ${payload.orderID}`);
  
  parcel.emit('delivered', payload);
});