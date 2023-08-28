import React from "react";

function Button({ props }) {
  return <Button variant="outlined">{props?.label}</Button>;
}

export default Button;
