"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

require("./config/database");

var _middleware = _interopRequireDefault(require("./config/middleware"));

var _config = _interopRequireDefault(require("./config"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _middleware["default"])(app);
app.use('/api', (0, _routes["default"])(_config["default"]));
app.listen(8009, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on ".concat(8009));
  }
});
var _default = app;
exports["default"] = _default;