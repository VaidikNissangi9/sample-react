// import { Grid } from "@material-ui/core";
import React from "react";
import ExpenseItem from "../molecules/ExpenseItem";

export const ExpensesList = (props) => {
  const { expenses, handleExpenseDelete } = props;
  return expenses.map((each, id) => {
    return (
      <ExpenseItem
        expense={each}
        key={id}
        handleExpenseDelete={handleExpenseDelete}
      />
    );
  });
};

ExpensesList.defaultProps = {
  handleExpenseDelete: () => {}
}

export default ExpensesList;
