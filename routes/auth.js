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
  [
    check('email', 'Введите корректный Email').isEmail(),
    check('password', 'Пароль обязателен').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Неверные Email или пароль' }] });
      }

      // Checking password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Неверные Email или пароль(пароль)' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        },
      );
    } catch (err) {
      return res.status(500).send('Server error');
    }
  },
);

module.exports = router;