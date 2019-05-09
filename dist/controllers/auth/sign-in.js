"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(req, res, next) {
  return res.status(200).json(req.user.toAuthJSON());
};

exports["default"] = _default;