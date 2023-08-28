import React from "react";
import MuiButton from "@mui/material/Button";

function Button(props) {
  return <MuiButton {...props}>{props?.children}</MuiButton>;
}

export default Button;
