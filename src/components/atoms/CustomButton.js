import { Button } from "@material-ui/core";
import React from "react";

export const CustomButton = (props) => {
  const { variant, color, children, endIcon, handleFormSubmit } = props;
  return (
    <Button
      variant={variant}
      color={color}
      endIcon={endIcon}
      onClick={handleFormSubmit}
    >
      {children}
    </Button>
  );
};


CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  endIcon: "",
  handleFormSubmit: () => {},
};

export default CustomButton;
