import express from 'express';
import User from '../models/user';

import auth from '../controllers/auth';

const models = { User };

export default config => {
  const routers = express();
  routers.use('/auth', auth(models, config));

  return routers;
};
