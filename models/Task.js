const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  condition: {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  solution: {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  topic: {
    type: String,
    required: true,
  },
  subtopic: {
    type: String,
  },
  hint: {
    type: String,
  },
  answer: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = Task = mongoose.model('tasks', TaskSchema);
