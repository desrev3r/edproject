const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route GET api/auth
// @desc Test route
// @access Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route POST api/auth
// @desc Authenticate user & get token
// @access Public

router.post(
  '/',
  [check('email', 'Введите корректный Email').isEmail()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 'fail', msg: errors.errors[0].msg });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ status: 'fail', msg: 'Неверные Email или пароль' });
      }

      // Checking password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ status: 'fail', msg: 'Неверные Email или пароль' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      const { name, progress, isAdmin, _id } = user;

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }

          res.json({
            id: _id,
            name,
            email,
            progress,
            isAdmin,
            token,
          });
        },
      );
    } catch (err) {
      return res.status(500).send('Server error');
    }
  },
);

module.exports = router;
