'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MuiButton = require('@mui/material/Button');
var MuiFormControl = require('@mui/material/FormControl');
var MuiInputLabel = require('@mui/material/InputLabel');
var MuiMenuItem = require('@mui/material/MenuItem');
var MuiSelect = require('@mui/material/Select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var MuiButton__default = /*#__PURE__*/_interopDefaultLegacy(MuiButton);
var MuiFormControl__default = /*#__PURE__*/_interopDefaultLegacy(MuiFormControl);
var MuiInputLabel__default = /*#__PURE__*/_interopDefaultLegacy(MuiInputLabel);
var MuiMenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MuiMenuItem);
var MuiSelect__default = /*#__PURE__*/_interopDefaultLegacy(MuiSelect);

function Button(props) {
  return /*#__PURE__*/React__default["default"].createElement(MuiButton__default["default"], props, props === null || props === void 0 ? void 0 : props.children);
}

function FormControl(props) {
  return /*#__PURE__*/React__default["default"].createElement(MuiFormControl__default["default"], props, props === null || props === void 0 ? void 0 : props.children);
}

function InputLabel(props) {
  return /*#__PURE__*/React__default["default"].createElement(MuiInputLabel__default["default"], props, props === null || props === void 0 ? void 0 : props.children);
}

function MenuItem(props) {
  return /*#__PURE__*/React__default["default"].createElement(MuiMenuItem__default["default"], props, props === null || props === void 0 ? void 0 : props.children);
}

function Select(props) {
  return /*#__PURE__*/React__default["default"].createElement(MuiSelect__default["default"], props, props === null || props === void 0 ? void 0 : props.children);
}

function convertToLowerCase(sentence) {
  return sentence.toLowerCase();
}

var themes = {
  light: "Light",
  dark: "Dark",
  blue: "Blue"
};

exports.Button = Button;
exports.FormControl = FormControl;
exports.InputLabel = InputLabel;
exports.MenuItem = MenuItem;
exports.Select = Select;
exports.convertToLowerCase = convertToLowerCase;
exports.themes = themes;
