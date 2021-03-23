import { Typography } from "@material-ui/core";
import React from "react";

export const TypographyVariants = (props) => {
  const { variant, color, children } = props;
  return (
    <Typography variant={variant} color={color}>
      {children}
    </Typography>
  );
};

export default TypographyVariants;
