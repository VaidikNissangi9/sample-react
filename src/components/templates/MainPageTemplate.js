import { Grid } from "@material-ui/core";
import React from "react";
import TypographyVariants from "../atoms/TypographyVariants";
import ExpensesArea from "../organisms/ExpensesArea";

export const MainPageTemplate = (props) => {
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
    <Grid container direction="column" alignItems={"center"}>
      <Grid item>
        <TypographyVariants variant={"h5"} color={"textPrimary"}>
          {"Expense Tracker"}
        </TypographyVariants>
      </Grid>
      <Grid item>
        <ExpensesArea
          expenses={expenses}
          expenseAmount={expenseAmount}
          expenseText={expenseText}
          handleExpenseAmount={handleExpenseAmount}
          handleExpenseText={handleExpenseText}
          handleFormSubmit={handleFormSubmit}
          handleExpenseDelete={handleExpenseDelete}
        />
      </Grid>
      <Grid item>
        <TypographyVariants variant={"h6"} color={"textPrimary"}>
          {"Total Amount Spent: " +
            expenses.reduce((total, each) => {
              return (total += each.amount);
            }, 0)}
        </TypographyVariants>
      </Grid>
    </Grid>
  );
};

ExpensesArea.defaultProps = {
  handleExpenseText: () => {},
  handleExpenseText: () => {},
  handleFormSubmit: () => {},
  handleExpenseDelete: () => {},
};

export default MainPageTemplate;
