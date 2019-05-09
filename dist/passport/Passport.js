"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _config = _interopRequireDefault(require("../config"));

var _user = _interopRequireDefault(require("../models/user"));

var _PassportStrategies = require("./PassportStrategies");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Provide passport authenticate logic
 *
 *  @example
 *         ./index.js
 *         app.use(passport.init())
 * **/
var Passport =
/*#__PURE__*/
function () {
  function Passport(config) {
    _classCallCheck(this, Passport);

    this._passport = _passport["default"];
    this._strategies = new _PassportStrategies.PassportStrategies(config, _user["default"]);

    this._passport.use(new _passportLocal.Strategy({
      usernameField: 'email',
      passwordField: 'password'
    }, this._strategies.local));

    this._passport.use(this._strategies.jwt);
  }

  _createClass(Passport, [{
    key: "init",
    value: function init() {
      return this._passport.initialize();
    }
  }]);

  return Passport;
}();

var _default = new Passport(_config["default"]);

exports["default"] = _default;