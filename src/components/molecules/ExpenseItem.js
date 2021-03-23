import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import TypographyVariants from "../atoms/TypographyVariants";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  itemBorders: {
    border: "1px solid #000",
    margin: "8px",
    boxShadow: "2px 2px 3px 0px #000",
    borderRadius: "2px"
  },
  text: {
    marginLeft: "8px"
  }
}));

export const ExpenseItem = (props) => {
  const { expense, handleExpenseDelete } = props;
  const classes = useStyles();

  return (
    <div className={classes.itemBorders}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        spacing={2}
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          xs={10}
          className={classes.text}
        >
          <Grid item>
            <TypographyVariants variant="body2" color={"textPrimary"}>
              {expense.text}
            </TypographyVariants>
          </Grid>
          <Grid item>
            <TypographyVariants variant="body2" color={"textPrimary"}>
              {expense.amount}
            </TypographyVariants>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => {
              handleExpenseDelete(expense.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

ExpenseItem.defaultProps = {
  handleExpenseDelete: () => {}
};

export default ExpenseItem;
