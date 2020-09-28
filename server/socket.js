module.exports = (server) => {
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    socket.on('join room', (room) => {
      socket.leave(socket.room);
      socket.join(room);
      socket.room = room;
    });

    socket.on('chat message', (msg) => {
      socket.broadcast.to(socket.room).emit('new msg', msg);
    });

    socket.on('leave room', function () {
      socket.leave(socket.room);
    });
  });

  return io;
};
