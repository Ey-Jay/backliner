require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./dbinit');
require('./models/Audio');
require('./models/Band');
require('./models/Comments');
require('./models/File');
require('./models/Lyrics');
require('./models/Project');
require('./models/User');
require('./models/Video');

const checkIfAuthenticated = require('./middleware/auth');
const getDevUserId = require('./middleware/devUser');
const user = require('./routes/user');
const bands = require('./routes/bands');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(morgan('dev'));
if (process.env.NODE_ENV === 'dev') app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'dev') app.use(getDevUserId);
else app.use(checkIfAuthenticated);
app.use('/user', user);
app.use('/bands', bands);
app.use(errorHandler);

app.listen(PORT, () => console.log(`🤖 Server running on port ${PORT} 🤖`));
