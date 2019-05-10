"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassportStrategies = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _passportJwt = require("passport-jwt");

/**
 * Provide passport authenticate strategies
 *
 *   here you should register your strategies callbacks to create ne user
 *   and use it in ./Passport.js
 *
 * **/
var PassportStrategies =
/*#__PURE__*/
function () {
  function PassportStrategies(config, User) {
    (0, _classCallCheck2["default"])(this, PassportStrategies);
    this._User = User;
    this.google = this.google.bind(this);
    this.local = this.local.bind(this);
    this.jwt = this.jwt.bind(this);
    this.facebook = this.facebook.bind(this);
    this.instagram = this.instagram.bind(this);
  }

  (0, _createClass2["default"])(PassportStrategies, [{
    key: "local",
    value: function () {
      var _local = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(email, password, done) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._User.findOne({
                  email: email
                });

              case 3:
                user = _context.sent;

                if (user) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", done(null, false));

              case 8:
                if (user.authenticateUser(password)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", done(null, false));

              case 10:
                return _context.abrupt("return", done(null, user));

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", done(_context.t0, false));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function local(_x, _x2, _x3) {
        return _local.apply(this, arguments);
      }

      return local;
    }()
  }, {
    key: "jwt",
    value: function jwt() {
      var _this = this;

      var SECRET = this.config.secretKey;
      var jwtOptions = {
        jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET
      };
      var jwtAuth = new _passportJwt.Strategy(jwtOptions,
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee2(payload, done) {
          var user;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _this._User.findOne({
                    email: email
                  });

                case 3:
                  user = _context2.sent;

                  if (user) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return", done(null, false));

                case 6:
                  return _context2.abrupt("return", done(null, user));

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](0);
                  return _context2.abrupt("return", done(_context2.t0, false));

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 9]]);
        }));

        return function (_x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }());
      return jwtAuth;
    }
  }, {
    key: "google",
    value: function google(accessToken, refreshToken, profile, done) {}
  }, {
    key: "facebook",
    value: function facebook(accessToken, refreshToken, profile, done) {}
  }, {
    key: "instagram",
    value: function instagram(req, accessToken, refreshToken, profile, done) {}
  }]);
  return PassportStrategies;
}();

exports.PassportStrategies = PassportStrategies;