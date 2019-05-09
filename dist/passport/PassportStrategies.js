"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassportStrategies = void 0;

var _passportJwt = require("passport-jwt");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    _classCallCheck(this, PassportStrategies);

    this._User = User;
    this.google = this.google.bind(this);
    this.local = this.local.bind(this);
    this.jwt = this.jwt.bind(this);
    this.facebook = this.facebook.bind(this);
    this.instagram = this.instagram.bind(this);
  }

  _createClass(PassportStrategies, [{
    key: "local",
    value: function () {
      var _local = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(email, password, done) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(payload, done) {
          var user;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
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