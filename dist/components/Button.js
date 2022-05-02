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
  name: "c5x1kr",
  styles: "color:hotpink;width:200px"
} : {
  name: "dxpu9k-style",
  styles: "color:hotpink;width:200px;label:style;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1tQiIsImZpbGUiOiIuLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvQnV0dG9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgQnV0dG9uID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3Qgc3R5bGUgPSBjc3NgXG4gICAgY29sb3I6IGhvdHBpbms7XG4gICAgd2lkdGg6IDIwMHB4O1xuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LjwvcD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY3NzPXtzdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi0tJHtwcm9wcy5raW5kfSBDVEFgfVxuICAgICAgICBkYXRhLWlkPXtwcm9wcy5pZH1cbiAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICA8aDQ+e3Byb3BzLmxhYmVsfTwvaDQ+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Button = props => {
  const style = _ref;
  return (0, _react2.jsx)("div", null, (0, _react2.jsx)("p", null, "Lorem ipsum dolor sit amet."), (0, _react2.jsx)("button", {
    css: style,
    className: "btn btn--".concat(props.kind, " CTA"),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  }, (0, _react2.jsx)("h4", null, props.label)));
};

var _default = Button;
exports.default = _default;