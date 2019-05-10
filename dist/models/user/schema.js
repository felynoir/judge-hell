"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var schema = new Schema({
  email: {
    type: String,
    unique: true,
    require: [true]
  },
  name: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: [true]
  }
});
exports.schema = schema;