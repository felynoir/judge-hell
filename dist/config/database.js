"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

try {
  _mongoose["default"].connect(_index["default"].MONGO_URL);
} catch (err) {
  _mongoose["default"].createConnection(_index["default"].MONGO_URL);
}

_mongoose["default"].connection.once('open', function () {
  return console.log('MongoDB Running');
}).on('error', function (e) {
  throw e;
});