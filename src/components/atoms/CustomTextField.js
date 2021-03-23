import { TextField } from "@material-ui/core";
import React from "react";

export const CustomTextField = (props) => {
  const {
    label,
    placeholder,
    inputType,
    expenseAmount,
    expenseText,
    handleExpenseAmount,
    handleExpenseText
  } = props;
  return (
    <TextField
      id="outlined-full-width"
      label={label}
      placeholder={placeholder}
      margin="normal"
      InputLabelProps={{
        shrink: true
      }}
      variant="outlined"
      type={inputType}
      value={inputType ? expenseAmount : expenseText}
      onChange={(event) => {
        if (inputType) {
          handleExpenseAmount(event);
        } else {
          handleExpenseText(event);
        }
      }}
    />
  );
};

CustomTextField.defaultProps = {
  label: "",
  placeholder: "",
  inputType: "",
  expenseAmount: 1,
  expenseText: "",
  handleExpenseAmount: () => {},
  handleExpenseText: () => {}
};

export default CustomTextField;
