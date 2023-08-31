import React from 'react';
import MuiButton from '@mui/material/Button';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';

function Button(props) {
  return /*#__PURE__*/React.createElement(MuiButton, props, props === null || props === void 0 ? void 0 : props.children);
}

function FormControl(props) {
  return /*#__PURE__*/React.createElement(MuiFormControl, props, props === null || props === void 0 ? void 0 : props.children);
}

function InputLabel(props) {
  return /*#__PURE__*/React.createElement(MuiInputLabel, props, props === null || props === void 0 ? void 0 : props.children);
}

function MenuItem(props) {
  return /*#__PURE__*/React.createElement(MuiMenuItem, props, props === null || props === void 0 ? void 0 : props.children);
}

function Select(props) {
  return /*#__PURE__*/React.createElement(MuiSelect, props, props === null || props === void 0 ? void 0 : props.children);
}

function convertToLowerCase(sentence) {
  return sentence.toLowerCase();
}

var themes = {
  light: "Light",
  dark: "Dark",
  blue: "Blue"
};

export { Button, FormControl, InputLabel, MenuItem, Select, convertToLowerCase, themes };
