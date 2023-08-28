import React from "react";
import Button from "@mui/material/Button";

function CustomButton(props) {
  return <Button variant="outlined">{props?.label}</Button>;
}

export default CustomButton;
