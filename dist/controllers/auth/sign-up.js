"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = function _default(_ref) {
  var User = _ref.User;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return User.create(req.body);

              case 3:
                user = _context.sent;
                return _context.abrupt("return", res.status(200).json(user.toAuthJSON()));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                _context.t0.status = 500;
                return _context.abrupt("return", next(_context.t0));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports["default"] = _default;