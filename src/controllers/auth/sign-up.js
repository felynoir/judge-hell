export default ({ User }) => async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user.toAuthJSON());
  } catch (e) {
    e.status = 500;
    return next(e);
  }
};
