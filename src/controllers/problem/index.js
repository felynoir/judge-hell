import { Router as router } from 'express';
import passport from 'passport';
import roleAuthorize from '../../utils/roleAuthorize';
import getAll from './get-all';

export default (models, config) => {
  const api = router();

  api.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    roleAuthorize('Admin'),
    getAll(models),
  );

  return api;
};
