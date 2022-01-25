'use strict'

let eventPool = require('../eventPool.js')
let driver = require('./driver');
let vendor = require('./vendor');

let d = new Date();

eventPool.on('order-made', (order) => {
  vendor(order)
})

eventPool.on('in-transit', (order) => {
  console.log('EVENT:', {
    event: 'in-transit',
    time: formatDate(d),
    order: order
  });
  driver(order)
})

events();