import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import config from '../config';
import User from '../models/user';
import { PassportStrategies } from './PassportStrategies';

/**
 * Provide passport authenticate logic
 *
 *  @example
 *         ./index.js
 *         app.use(passport.init())
 * **/

class Passport {
  constructor(config) {
    this._passport = passport;
    this._strategies = new PassportStrategies(config, User);

    this._passport.use(
      new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        this._strategies.local,
      ),
    );

    this._passport.use(this._strategies.jwt);
  }

  init() {
    return this._passport.initialize();
  }
}

export default new Passport(config);
