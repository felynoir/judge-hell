import { ExtractJwt, Strategy as JwtStategy } from 'passport-jwt';

/**
 * Provide passport authenticate strategies
 *
 *   here you should register your strategies callbacks to create ne user
 *   and use it in ./Passport.js
 *
 * **/

export class PassportStrategies {
  constructor(config, User) {
    this._User = User;
    this.google = this.google.bind(this);
    this.local = this.local.bind(this);
    this.jwt = this.jwt.bind(this);
    this.facebook = this.facebook.bind(this);
    this.instagram = this.instagram.bind(this);
  }

  async local(email, password, done) {
    try {
      const user = await this._User.findOne({ email });

      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }

  jwt() {
    const SECRET = this.config.secretKey;
    const jwtOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET,
    };
    const jwtAuth = new JwtStategy(jwtOptions, async (payload, done) => {
      try {
        const user = await this._User.findOne({ email });

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      } catch (e) {
        return done(e, false);
      }
    });
    return jwtAuth;
  }
  google(accessToken, refreshToken, profile, done) {}
  facebook(accessToken, refreshToken, profile, done) {}
  instagram(req, accessToken, refreshToken, profile, done) {}
}
