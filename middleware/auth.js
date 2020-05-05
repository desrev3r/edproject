const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({
      status: 'fail',
      msg: 'Нет токена, вы не авторизованы',
    });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(403).json({
      status: 'fail',
      msg: 'Невалидный токен',
    });
  }
};
