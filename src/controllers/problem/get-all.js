export default ({ Problem }) => async (req, res, next) => {
  try {
    const problem = await Problem.find();
    return res.status(200).json(problem);
  } catch (e) {
    next(e);
  }
};
