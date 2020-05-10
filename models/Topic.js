const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // subtopicList: [
  //   {
  //     subtopic: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'subtopics',
  //     },
  //   }
  // ]
});

module.exports = Topic = mongoose.model('topics', TopicSchema);
