export default (err, req, res, next) => {
  const error = err;
  if (process.env.NODE_ENV !== 'production') {
    console.log(err);
  }

  if (['UserExistsError', 'ValidationError'].includes(err.name)) {
    return res.status(405).json(err);
  }

  // Duplicate unique
  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(500).json({
      message: 'User already exist',
    });
  }

  return res.status(error.status || 500).json({
    message: error.message,
  });
};
