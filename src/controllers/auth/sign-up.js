import { filteredBody } from '../../utils/filteredBody';
import { field } from '../../models/user';

export default ({ User }) => async (req, res, next) => {
  try {
    const body = filteredBody(req.body, field);
    const user = await User.create(body);
    return res.status(200).json(user.toAuthJSON());
  } catch (e) {
    next(e);
  }
};
