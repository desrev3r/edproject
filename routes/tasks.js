const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
 
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const Task = require('../models/Task');

// @route GET api/tasks
// @desc Get All Tasks
// @access Public
router.get('/', auth, admin, async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json(tasks);
});

// @route POST api/tasks
// @desc Create A New Task
// @access Private (only admin)
router.post('/', [auth, admin], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, condition, topic, subtopic, answer } = req.body;

  try {
    const task = new Task({
      title,
      condition,
      topic,
      subtopic,
      answer,
    });

    const taskData = await task.save();
    res.status(200).json(taskData);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = router;
