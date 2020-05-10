const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const Topic = require('../models/Topic');
const Subtopic = require('../models/Subtopic');

// @route POST api/subtopics
// @desc Create A New Subtopic
// @access Private (admin)

router.post('/', [auth, admin], async (req, res) => {
  const { title, topic } = req.body;

  try {
    const topicId = await Topic.findOne({ title: topic });

    if (topicId) {
      const isSubtopicExist = await Subtopic.findOne({ title, topic: topicId.id });

      if (isSubtopicExist) {
        return res
          .status(400)
          .json({ status: 'fail', msg: 'Такая подтема уже существует' });
      }

      const subtopic = new Subtopic({
        title,
        topic: topicId,
      });

      await subtopic.save();

      return res.status(200).json({
        status: 'success',
        msg: 'Подтема успешно создана!',
        data: subtopic,
      });
    }

    return res.status(404).json({
      status: 'fail',
      msg: 'Такой темы не существует!',
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route DELETE api/subtopics
// @desc Delete The Subtopic
// @access Private (admin)

router.delete('/', [auth, admin], async (req, res) => {
  const { title } = req.body;

  try {
    const isTopicExist = await Topic.findOne({ title });

    if (!isTopicExist) {
      return res
        .status(404)
        .json({ status: 'fail', msg: 'Такой темы не существует' });
    }

    await Topic.deleteOne({ title });

    return res.status(200).json({ status: 'success', msg: 'Тема удалена' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route PUT api/tasks
// @desc Update The Subtopic
// @access Private (admin)

router.put('/', [auth, admin], async (req, res) => {
  const { title, updateTitle } = req.body;

  try {
    const isTopicExist = await Topic.findOne({ title });

    if (!isTopicExist) {
      return res
        .status(404)
        .json({ status: 'fail', msg: 'Такой темы не существует' });
    }
    const updatedTopic = await Topic.findOneAndUpdate(
      { title },
      { $set: { title: updateTitle } },
      { new: true },
    );

    return res
      .status(200)
      .json({ status: 'success', msg: 'Тема обновлена', data: updatedTopic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
