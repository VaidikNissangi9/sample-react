import React from "react";
import { Grid } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import CustomTextField from "../atoms/CustomTextField";
import CustomButton from "../atoms/CustomButton";

export const ExpensesForm = (props) => {
  const {
    expenseAmount,
    expenseText,
    handleExpenseAmount,
    handleExpenseText,
    handleFormSubmit
  } = props;
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <CustomTextField
          label={"Expense"}
          placeholder={"Eg. Rent"}
          expenseAmount={expenseAmount}
          expenseText={expenseText}
          handleExpenseAmount={handleExpenseAmount}
          handleExpenseText={handleExpenseText}
        />
      </Grid>
      <Grid item>
        <CustomTextField
          label={"Amount"}
          placeholder={"Eg. 100"}
          inputType={"number"}
          expenseAmount={expenseAmount}
          expenseText={expenseText}
          handleExpenseAmount={handleExpenseAmount}
          handleExpenseText={handleExpenseText}
        />
      </Grid>
      <Grid item>
        <CustomButton
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          handleFormSubmit={handleFormSubmit}
        >
          {"Submit"}
        </CustomButton>
      </Grid>
    </Grid>
  );
};

ExpensesForm.defaultProps = {
  handleExpenseText: () => {},
  handleExpenseText: () => {},
  handleFormSubmit: () => {},
};

export default ExpensesForm;
