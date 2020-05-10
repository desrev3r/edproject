const mongoose = require('mongoose');

const SubtopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "topics"
  },
});

module.exports = Subtopic = mongoose.model('subtopics', SubtopicSchema);
