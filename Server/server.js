'use strict';

const socketio = require('socket.io');
const logger = require('./eventLogger');
const PORT = process.env.PORT || 3001;
const server = socketio(PORT);
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log(`Socket.io is connected ${socket.id}`);

  socket.on('pickup', payload => {
    socket.join(payload.orders);
    caps.emit('join', payload);
    logger('pickup', payload);
  });

  socket.on('in-transit', payload => {
    socket.join(payload.orders);
    logger('in-transit', payload);
    caps.to(payload.orders).emit('delivered', payload);
    logger('delivered', payload);
  });
});