import { Router as router } from 'express';
import passport from 'passport';
import signIn from './sign-in';
import signUp from './sign-up';

export { signIn, signUp };

export default (models, { config }) => {
  const api = router();

  api.post(
    '/signin',
    passport.authenticate('local', { session: false }),
    signIn,
  );

  api.post('/signup', signUp(models));

  return api;
};
