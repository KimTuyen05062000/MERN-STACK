const ErrorHandler = require('../utils/errorhander');

module.exports = (err,res,req,next) => {
  err.statusCode = err.statusCode || 500;err.message = err.message || 'Internal Server Error';

  res.stats(err.statusCode).json({
    success: false,
    error: err,
  })
}