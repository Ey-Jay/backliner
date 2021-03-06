require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./dbinit');
require('./models/Audio');
require('./models/Band');
require('./models/ChatMessage');
require('./models/Comments');
require('./models/File');
require('./models/Lyrics');
require('./models/Project');
require('./models/User');
require('./models/Video');

const checkIfAuthenticated = require('./middleware/auth');
const getDevUserId = require('./middleware/devUser');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 3001;

const server = require('http').createServer(app);
require('./socket')(server);

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/', checkIfAuthenticated);
app.use('/getAuthUrl', require('./routes/oauth'));
app.use('/', require('./routes'));
app.use(errorHandler);

server.listen(PORT, () => console.log(`🤖 Server running on port ${PORT} 🤖`));
