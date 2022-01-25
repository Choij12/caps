let driver = require('../Modules/driver');
let vendor = require('../Modules/vendor');

orders = [
  {
    store: 'Coffee shop',
    orderID: '3123',
    customer: 'Jacob',
    address: 'New York, NY'
  }
];

describe('Tests', () => {

  it('creates new orders', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    driver(orders[0]);
    expect(consoleSpy).toHaveBeenCalledWith('DRIVER: Order is delivered');
  });
  it('creates new orders', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    vendor(orders[0]);
    expect(consoleSpy).toHaveBeenCalledWith('VENDOR: Picking up');
  });
});
