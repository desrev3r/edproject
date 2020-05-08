const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');

const Profile = require('../models/Profile');

// @route GET api/profile/me
// @desc Get current users profile
// @access Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar', 'email', 'isAdmin']);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'Профиль для данного пользователя не найден' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/profile/
// @desc Get All Profiles
// @access Public

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find({}).populate('user', ['name', 'avatar', 'email']);

    if (!profiles) {
      return res
        .status(400)
        .json({ msg: 'Ни один пользователь не найден' });
    }

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/profile/:user_id
// @desc Get Profile By ID
// @access Public

router.get('/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar', 'email', 'isAdmin']);

    if (!profile) {
      return res.status(400).json({ msg: 'Профиль не найден' });
    }

    res.json(profile);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Профиль не найден' });
    }
    res.status(500).send('Server Error');
  }
});

// @route POST api/profile
// @desc Create Or Update User Profile
// @access Private
router.post('/', [auth], async (req, res) => {
  const { experience } = req.body;

  const profileFields = {
    user: req.user.id,
    experience,
  };

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    // Updating
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true },
      );

      return res.json(profile);
    }

    // Creating
    profile = new Profile(profileFields);
    await profile.save();

    res.json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
