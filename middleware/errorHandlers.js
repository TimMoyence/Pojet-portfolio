exports.notFound = (req, res, next) => {
  const error = new Error("Not found");

  error.status = 404;

  next(error);
};

// * Ce middleware va emplacer tous les try catch des promesses
// * fn veut dire function
exports.catchErrors = (fn) => {
    return (req, res, next) => {
        return fn(req, res, next).catch(next);
    };
};

exports.showErrors = (err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).render("error", { error: err.message });
};

// module.exports = { notFound, showErrors };
