let auth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.json({
      isAuth: false,
      error: true,
    });
  }
  next();
};

module.exports = { auth };
