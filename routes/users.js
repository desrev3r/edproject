const express = require('express');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route POST api/users
// @desc Register User
// @access Public

router.post(
  '/',
  [
    check('name', 'Имя - обязательное поле!').not().isEmpty(),
    check('email', 'Введите корректный Email').isEmail(),
    check('password', 'Пароль должен состоять минимум из 6 символов').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((item) => ({ msg: item.msg })),
      });
    }

    const { name, email, password, progress } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'Пользователь уже существует!' }],
        });
      }

      user = new User({
        name,
        email,
        password,
        progress,
      });

      // Encrypting password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
