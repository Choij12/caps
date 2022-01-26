'use strict';

const logEvent = require('../Modules/eventLogger.js');

describe('testing server handler', () => {

  console.log = jest.fn();
  it('this should log events and payloads', () => {
    let eventHandler = logEvent('test');
    let payload = { 
      store: 'Coffee shop',
      orderID: '3123',
      customer: 'Jacob',
      address: 'New York, NY'
    };

    eventHandler(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
