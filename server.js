require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB = require('./dbinit');
require('./models/Audio');
const Band = require('./models/Band');
require('./models/Comments');
require('./models/File');
require('./models/Lyrics');
require('./models/Project');
require('./models/User');
require('./models/Video');

const ObjectID = mongoose.Types.ObjectId;

const checkIfAuthenticated = require('./middleware/auth');
const getDevUserId = require('./middleware/devUser');
const user = require('./routes/user');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

// Band.create({
//   name: 'The Puffy Jiggles',
//   avatar: 1,
//   owner: ObjectID('5f5f590cc53c3e15300c1ba7'),
//   members: [
//     ObjectID('5f5f590cc53c3e15300c1ba7'),
//     ObjectID('5f5659cdf0b5220df874ce3c'),
//   ],
//   active: true,
// });

app.use(morgan('dev'));
if (process.env.NODE_ENV === 'dev') app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'dev') app.use(getDevUserId);
else app.use(checkIfAuthenticated);
app.use('/user', user);
app.use(errorHandler);

app.listen(PORT, () => console.log(`🤖 Server running on port ${PORT} 🤖`));
