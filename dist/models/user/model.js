"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../config"));

var _schema = require("./schema");

// Hash the user password on creation
_schema.schema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }

  return next();
});

_schema.schema.methods = {
  /**
   * Authenticate the user
   *
   * @public
   * @param {String} password - provided by the user
   * @returns {Boolean} isMatch - password match
   */
  authenticateUser: function authenticateUser(password) {
    return _bcrypt["default"].compareSync(password, this.password);
  },

  /**
   * Hash the password
   *
   * @private
   * @param {String} password - User's password
   * @returns {String} password - Hashed password
   */
  _hashPassword: function _hashPassword(password) {
    var saltRound = 10;
    return _bcrypt["default"].hashSync(password, saltRound);
  },

  /**
   * Generate a jwt token for authentication
   *
   * @public
   * @returns {String} token - JWT token
   */
  createToken: function createToken() {
    return _jsonwebtoken["default"].sign({
      email: this.email,
      username: this.username
    }, _config["default"].secretKey);
  },

  /**
   * Parse the user object in data we wanted to send when is auth
   *
   * @public
   * @returns {Object} User - ready for auth
   */
  toAuthJSON: function toAuthJSON() {
    return {
      _id: this._id,
      token: this.createToken()
    };
  },

  /**
   * Parse the user object in data we wanted to send
   *
   * @public
   * @returns {Object} User - ready for populate
   */
  toJSON: function toJSON() {
    return {
      _id: this._id,
      username: this.username
    };
  }
};

var User = _mongoose["default"].model('User', _schema.schema);

var _default = User;
exports["default"] = _default;