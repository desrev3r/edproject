const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const profileRoutes = require('./routes/profiles');
const topicRoutes = require('./routes/topics');
const subtopicRoutes = require('./routes/subtopics');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users/', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/subtopics', subtopicRoutes);

module.exports = app;
