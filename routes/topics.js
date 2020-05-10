const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const Topic = require('../models/Topic');

// @route POST api/topics
// @desc Create A New Topic
// @access Private (admin)

router.post('/', [auth, admin], async (req, res) => {
  const { title } = req.body;

  try {
    const isTopicExist = await Topic.findOne({ title });

    if (isTopicExist) {
      return res
        .status(400)
        .json({ status: 'fail', msg: 'Такая тема уже существует' });
    }

    const topic = new Topic({
      title,
    });

    await topic.save();

    return res
      .status(200)
      .json({ status: 'success', msg: 'Тема успешно создана', data: topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route DELETE api/topics
// @desc Delete The Topic
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

// @route PUT api/topics
// @desc Update The Topic
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

    return res.status(200).json({ status: 'success', msg: 'Тема обновлена', data: updatedTopic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
