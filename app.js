const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users/', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
