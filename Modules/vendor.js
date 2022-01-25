let eventPool = require('../eventPool.js')

eventPool.on('delivered', (order) => {
  console.log('VENDOR: Thank you,', order.customer, 'from,', order.store, '\n');
})

function vendorEvent(order){
  console.log('VENDOR: start pickup');
  console.log('ORDER_ID:', order.orderID, '\n');
  eventPool.emit('pickup', order)
}

module.exports = vendor;