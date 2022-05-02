"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1ycs5s8",
  styles: "color:lightsalmon;width:600px;font-size:26px;background:lavender"
} : {
  name: "n7wlih-style",
  styles: "color:lightsalmon;width:600px;font-size:26px;background:lavender;label:style;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9CYWRnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU21CIiwiZmlsZSI6Ii4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9CYWRnZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxudHlwZSBCYWRnZVByb3BzID0ge1xuICB2YWx1ZT86IG51bWJlcjtcbn07XG5jb25zdCBCYWRnZTogRnVuY3Rpb25Db21wb25lbnQ8QmFkZ2VQcm9wcz4gPSAoeyB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgIGNvbG9yOiBsaWdodHNhbG1vbjtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZVwiIGNzcz17c3R5bGV9PlxuICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYXZ5XCI+e3ZhbHVlIHx8IDB9PC9oND5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCYWRnZTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Badge = _ref2 => {
  let {
    value
  } = _ref2;
  const style = _ref;
  return (0, _react2.jsx)("div", {
    className: "badge",
    css: style
  }, (0, _react2.jsx)("h4", {
    className: "heavy"
  }, value || 0));
};

var _default = Badge;
exports.default = _default;