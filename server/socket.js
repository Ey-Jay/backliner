module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      socket.broadcast.emit('new msg', msg);
    });
  });

  return io;
};
