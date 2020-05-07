const express = require('express');

const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const User = require('../models/User');
const Profile = require('../models/Profile');

// @route POST api/users
// @desc Get All Users
// @access Private

router.get('/', [auth, admin], async (req, res) => {
  try {
    const userList = await User.find({});

    if (!userList) {
      return res.status(400).json({
        status: 'fail',
        msg: 'Список пользователей пуст!',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: userList,
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route POST api/users
// @desc Register User
// @access Public

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
    // Creating User
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        status: 'fail',
        msg: 'Такой пользователь уже существует!',
      });
    }

    user = new User({
      name,
      email,
      password,
    });

    // Encrypting password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Creating Profile
    const profileFields = {
      user: user.id,
      experience: { tasks: [] },
    };

    const profile = new Profile(profileFields);
    await profile.save();

    // Returning Token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (error, token) => {
        if (error) {
          throw error;
        }
        res.json({ token });
      },
    );
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
