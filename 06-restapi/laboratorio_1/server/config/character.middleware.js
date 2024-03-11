const characterMiddleware = (req, res, next) => {
  next();
};

module.exports = (req, res, next) => {
  characterMiddleware(req, res, next);
};
