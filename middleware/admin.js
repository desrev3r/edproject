const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const permission = await User.findOne({ id: req.user.id });

    if (!permission.isAdmin) {
      return res.status(403).json({
        status: 'fail',
        msg: 'Доступ запрещен',
      });
    }
    next();
  } catch (err) {
    res.status(403).json({ msg: 'Server error' });
  }
};
