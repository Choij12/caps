let eventPool = require('../eventPool.js')

orders = [
  {
    store: 'Coffee shop',
    orderID: '3123',
    customer: 'Jacob',
    address: 'New York, NY'
  }
]

function event(){
  eventPool.emit('order-made', orders[0]);
}

module.exports = events;