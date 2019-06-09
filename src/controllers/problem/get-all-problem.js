export default ({ Problem }) => async (req, res, next) => {
  try {
    const problems = await Problem.find();
    return res.status(200).json(problems);
  } catch (e) {
    next(e);
  }
};
