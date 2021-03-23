import { Grid } from "@material-ui/core";
import React from "react";
import ExpensesForm from "../molecules/ExpensesForm";
import ExpensesList from "../organisms/ExpensesList";

export const ExpensesArea = (props) => {
  const {
    expenses,
    expenseAmount,
    expenseText,
    handleExpenseAmount,
    handleExpenseText,
    handleFormSubmit,
    handleExpenseDelete
  } = props;

  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <ExpensesForm
          expenseAmount={expenseAmount}
          expenseText={expenseText}
          handleExpenseAmount={handleExpenseAmount}
          handleExpenseText={handleExpenseText}
          handleFormSubmit={handleFormSubmit}
        />
      </Grid>
      <Grid item>
        <ExpensesList
          expenses={expenses}
          handleExpenseDelete={handleExpenseDelete}
        />
      </Grid>
    </Grid>
  );
};

ExpensesArea.defaultProps = {
  handleExpenseText: () => {},
  handleExpenseText: () => {},
  handleFormSubmit: () => {},
  handleExpenseDelete: () => {},
  expenses: []
};

export default ExpensesArea;
