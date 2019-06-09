import express from 'express';
import User from '../models/user';
import Problem from '../models/problem';
import Submission from '../models/submission';

import auth from '../controllers/auth';
import problem from '../controllers/problem';
import submission from '../controllers/submission';

const models = { User, Problem, Submission };

export default config => {
  const routers = express();
  routers.use('/auth', auth(models, config));
  routers.use('/problem', problem(models, config));
  routers.use('/submission', submission(models, config));

  return routers;
};
