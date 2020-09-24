module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      socket.broadcast.emit('new msg', msg);
    });

    socket.on('end', function () {
      socket.disconnect(0);
    });
  });

  return io;
};
