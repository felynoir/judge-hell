"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("../passport"));

var _cors = _interopRequireDefault(require("cors"));

var isTest = process.env.NODE_ENV === 'test';
var isDev = process.env.NODE_ENV === 'development';

var _default = function _default(app) {
  app.use(_bodyParser["default"].json());
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));
  app.use(_passport["default"].init());
  app.use((0, _cors["default"])());

  if (isDev && !isTest) {
    app.use((0, _morgan["default"])('dev'));
  }
};

exports["default"] = _default;