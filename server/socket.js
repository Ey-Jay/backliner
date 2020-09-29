const { auth } = require('firebase-admin');
const admin = require('./authInit');

const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const Band = require('./models/Band');
const ChatMessage = require('./models/ChatMessage');
const User = require('./models/User');

function kickUser(socket) {
  socket.emit('Unauthorized attempt');
  socket.close();
}

module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', async (socket) => {
    try {
      socket.on('join room', async (room, authToken) => {
        if (process.env.NODE_ENV !== 'dev') {
          if (!authToken) return () => kickUser();

          const userInfo = await admin.auth().verifyIdToken(authToken);
          if (!userInfo) return () => kickUser();

          const dbBand = await Band.findById(room);
          const dbUser = await User.findOne({ auth_token: userInfo.uid });
          if (!dbBand.members.includes(dbUser._id)) return () => kickUser();
        }

        socket.leave(socket.room);
        socket.join(room);
        socket.room = room;

        const history = await ChatMessage.find({ band: room })
          .populate('author', '_id name avatar')
          .populate('band')
          .exec();
        socket.emit('history', history);
      });

      socket.on('chat message', async ({ content, authorID }) => {
        const msg = await ChatMessage.create({
          content,
          author: ObjectID(authorID),
          band: ObjectID(socket.room),
        });

        await msg.populate('author', '_id name avatar').execPopulate();
        await msg.populate('author').execPopulate();

        io.to(socket.room).emit('new msg', msg);
      });

      socket.on('leave room', function () {
        socket.leave(socket.room);
      });
    } catch (e) {
      socket.emit('500');
      socket.close();
    }
  });

  return io;
};
