"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "signIn", {
  enumerable: true,
  get: function get() {
    return _signIn["default"];
  }
});
Object.defineProperty(exports, "signUp", {
  enumerable: true,
  get: function get() {
    return _signUp["default"];
  }
});
exports["default"] = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _signIn = _interopRequireDefault(require("./sign-in"));

var _signUp = _interopRequireDefault(require("./sign-up"));

var _default = function _default(models, _ref) {
  var config = _ref.config;
  var api = (0, _express.Router)();
  api.post('/signin', _passport["default"].authenticate('local', {
    session: false
  }), _signIn["default"]);
  api.post('/signup', (0, _signUp["default"])(models));
  return api;
};

exports["default"] = _default;