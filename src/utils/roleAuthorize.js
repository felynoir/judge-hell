/**
 * Check role user
 * @param {String|Array<String>} role - role that allow to access can be array.
 */
export default role => async (req, res, next) => {
  const payload = req.user ? req.user.payload : null;
  if (payload != null)
    if (payload.role != role) {
      res.status(401).json({ message: 'No permission to access' });
    }
  next();
};
