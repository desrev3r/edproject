const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const Task = require('../models/Task');
const User = require('../models/User');

// PUBLIC ROUTES

// @route GET api/tasks
// @desc Get All Tasks
// @access Public
router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json({ status: 'success', data: tasks });
});

// @route GET api/tasks
// @desc Get The Task By Id
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res
        .status(404)
        .json({ status: 'fail', msg: 'Задание не найдено' });
    }
    return res.status(200).json({ status: 'success', data: task });
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route POST api/tasks
// @desc Check The Solution
// @access Private (auth)
router.post('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;
  const userId = req.user.id;

  try {
    const task = await Task.findOne({ _id: id });

    if (answer !== task.answer || answer === 'undefined') {
      return res.status(403).json({ status: 'fail', msg: 'Ответ неверный' });
    }

    // Verifing User Solution
    const user = await User.findOne({ _id: userId });
    const { progress } = user;
    const newProgress = {
      solved: [...progress.solved, { id, score: 10 }],
    };

    const isTaskExist = (taskId) => {
      const found = progress.solved.some((el) => el.id === taskId);
      return found;
    };

    if (isTaskExist(id)) {
      return res
        .status(403)
        .json({ status: 'fail', msg: 'Вы уже решали это задание' });
    }

    // If Correct, Then Updating User Progress
    await User.findOneAndUpdate(
      { _id: userId },
      { progress: newProgress },
      { new: true },
    );

    return res.status(200).json({ status: 'success', msg: 'Задание решено' });
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// ADMIN ROUTES

// @route POST api/tasks
// @desc Create A New Task
// @access Private (admin)
router.post(
  '/',
  [auth, admin],
  [
    check('title', 'Название задачи - обязательное поле').not().isEmpty(),
    check('topic', 'Тема задачи - обязательное поле').not().isEmpty(),
    check('answer', 'Ответ - обязательное поле').not().isEmpty(),
    check('condition.text', 'Условие задачи - обязательное поле')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ status: 'fail', msg: errors.array().map((item) => item.msg) });
    }

    const {
      title,
      condition,
      solution,
      topic,
      subtopic,
      answer,
      hint,
    } = req.body;

    try {
      const task = new Task({
        title,
        condition,
        solution,
        topic,
        subtopic,
        answer,
        hint,
      });

      const taskData = await task.save();
      res.status(200).json({ status: 'success', data: taskData });
    } catch (err) {
      return res.status(500).send('Server error');
    }
  },
);

// @route DELETE api/tasks
// @desc Delete The Task
// @access Private (admin)
router.delete('/:id', [auth, admin], async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findOneAndRemove({ _id: id });
    res.status(200).json({ status: 'success', msg: 'Задание удалено' });
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = router;
