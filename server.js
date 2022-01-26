'use strict';

const parcel = require('./Modules/parcel.js');
const logEvent = require('./Modules/eventLogger');

parcel.on('pickup', logEvent('pickup'));
parcel.on('in-transit', logEvent('in-transit'));
parcel.on('delivered', logEvent('delivered'));

require('./Modules/driver.js');
require('./Modules/vendor.js');