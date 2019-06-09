export default ({ Problem }) => async (req, res, next) => {
  try {
    const { name } = req.params;
    const problem = await Problem.findOne({ name });
    return res.status(200).json(problem);
  } catch (e) {
    next(e);
  }
};
