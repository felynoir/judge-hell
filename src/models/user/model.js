import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import { schema } from './schema';

// Hash the user password on creation
schema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

schema.methods = {
  /**
   * Authenticate the user
   *
   * @public
   * @param {String} password - provided by the user
   * @returns {Boolean} isMatch - password match
   */
  authenticateUser(password) {
    return bcrypt.compareSync(password, this.password);
  },
  /**
   * Hash the password
   *
   * @private
   * @param {String} password - User's password
   * @returns {String} password - Hashed password
   */
  _hashPassword(password) {
    const saltRound = 10;
    return bcrypt.hashSync(password, saltRound);
  },
  /**
   * Generate a jwt token for authentication
   *
   * @public
   * @returns {String} token - JWT token
   */
  createToken() {
    return jwt.sign(
      { email: this.email, username: this.username },
      config.secretKey,
    );
  },

  /**
   * Parse the user object in data we wanted to send when is auth
   *
   * @public
   * @returns {Object} User - ready for auth
   */
  toAuthJSON() {
    return {
      _id: this._id,
      token: this.createToken(),
    };
  },

  /**
   * Parse the user object in data we wanted to send
   *
   * @public
   * @returns {Object} User - ready for populate
   */
  toJSON() {
    return {
      _id: this._id,
      username: this.username,
    };
  },
};

const User = mongoose.model('User', schema);

export default User;
