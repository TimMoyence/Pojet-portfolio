const adminMiddleware = (req, res, next) => {
  // a-t-on un user ?
  if (!req.session.user) {
    return res.redirect('/login');
  }
  if (req.session.user.role === 'admin') {
    return next();
  } 
  const error = new Error ('Accès refusé');
  error.status = 401;

  next(error);
};

module.exports = adminMiddleware;
