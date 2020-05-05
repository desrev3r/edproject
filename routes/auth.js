const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

// @route POST api/auth
// @desc Authenticate user & get token
// @access Public

router.post('/', async (req, res) => {
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

    const { name, isAdmin, id } = user;

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          throw err;
        }

        res.json({
          id,
          name,
          email,
          isAdmin,
          token,
        });
      },
    );
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = router;
