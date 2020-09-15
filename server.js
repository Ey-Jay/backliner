require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./dbinit');
const checkIfAuthenticated = require('./middleware/auth');
const getDevUserId = require('./middleware/devUser');
const user = require('./routes/user');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 3001;

const server = require('http').createServer(app);
require('./socket')(server);

connectDB();

app.use(morgan('dev'));
if (process.env.NODE_ENV === 'dev') app.use(cors());
app.use(express.json());
// if (process.env.NODE_ENV !== 'dev') app.use(checkIfAuthenticated);
app.use(getDevUserId);
app.use('/user', user);
app.use(errorHandler);

server.listen(PORT, () => console.log(`🤖 Server running on port ${PORT} 🤖`));
