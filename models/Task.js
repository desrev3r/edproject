const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  condition: {
    text: {
      type: String,
      require: true,
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
  answer: {
    type: Number,
    required: true,
  },
});

module.exports = Task = mongoose.model('tasks', TaskSchema);
