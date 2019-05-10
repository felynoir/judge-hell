"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../models/user"));

var _auth = _interopRequireDefault(require("../controllers/auth"));

var models = {
  User: _user["default"]
};

var _default = function _default(config) {
  var routers = (0, _express["default"])();
  routers.use('/auth', (0, _auth["default"])(models, config));
  return routers;
};

exports["default"] = _default;