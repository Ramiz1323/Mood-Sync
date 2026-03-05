const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

const authRouter = require('./routes/auth.routes.js');
const songRouter = require('./routes/song.routes.js');

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/songs', songRouter);

module.exports = app;