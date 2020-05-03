const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  progress: {
    solved: [
      {
        id: {
          type: String,
          required: true,
          unique: true,
        },
        score: {
          type: Number,
          required: true,
        }
      }
    ]
  }
});

module.exports = User = mongoose.model('users', UserSchema);
