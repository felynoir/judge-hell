"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _config = _interopRequireDefault(require("../config"));

var _user = _interopRequireDefault(require("../models/user"));

var _PassportStrategies = require("./PassportStrategies");

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
    (0, _classCallCheck2["default"])(this, Passport);
    this._passport = _passport["default"];
    this._strategies = new _PassportStrategies.PassportStrategies(config, _user["default"]);

    this._passport.use(new _passportLocal.Strategy({
      usernameField: 'email',
      passwordField: 'password'
    }, this._strategies.local));

    this._passport.use(this._strategies.jwt);
  }

  (0, _createClass2["default"])(Passport, [{
    key: "init",
    value: function init() {
      return this._passport.initialize();
    }
  }]);
  return Passport;
}();

var _default = new Passport(_config["default"]);

exports["default"] = _default;