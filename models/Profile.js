const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  avatar: {
    type: String,
    default: 'https://newstyle-mag.com/wp-content/uploads/2017/02/232.jpg',
  },
  experience: {
    tasks: [
      {
        id: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
