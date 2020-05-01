const User = require('../models/User');

module.exports = async (req, res, next) => {
  const permission = await User.findOne({ _id: req.user.id });

  if (!permission.isAdmin) {
    return res.status(403).json({
      msg: 'Forbidden',
    });
  }

  // Verify admin
  try {
    next();
  } catch (err) {
    res.status(403).json({ msg: 'Forbidden' });
  }
};
