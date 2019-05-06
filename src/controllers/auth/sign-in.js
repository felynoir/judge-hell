export default (req, res, next) => {
  return res.status(200).json(req.user.toAuthJSON());
};
