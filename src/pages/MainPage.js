import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MainPageTemplate from "../components/templates/MainPageTemplate";
import { deleteItem, saveItem } from "../state/actions";

export const MainPage = ({ expenses, saveItem, deleteItem }) => {
  const [expenseText, setExpenxeText] = useState("");
  const [expenseAmount, setExpenxeAmount] = useState("");

  useEffect(() => {}, []);

  const handleExpenseText = (event) => {
    setExpenxeText(event.target.value);
  };

  const handleExpenseAmount = (event) => {
    setExpenxeAmount(parseInt(event.target.value, 10));
  };

  const handleFormSubmit = () => {
    if (expenseText !== "" && expenseAmount !== "") {
      saveItem(expenseText, expenseAmount);
      setExpenxeText("");
      setExpenxeAmount("");
    }
  };

  const handleExpenseDelete = (id) => {
    deleteItem(id);
  };

  return (
    <MainPageTemplate
      expenses={expenses}
      expenseAmount={expenseAmount}
      expenseText={expenseText}
      handleExpenseAmount={handleExpenseAmount}
      handleExpenseText={handleExpenseText}
      handleFormSubmit={handleFormSubmit}
      handleExpenseDelete={handleExpenseDelete}
    />
  );
};

const mapStateToProps = (state) => ({
  expenses: state.reducer.items
});

const dispatchStateToProps = (dispatch) => ({
  saveItem: (text, amount) => dispatch(saveItem(text, amount)),
  deleteItem: (id) => dispatch(deleteItem(id))
});

MainPage.defaultProps = {
  saveItem: () => {},
  deleteItem: () => {},
};

export default connect(mapStateToProps, dispatchStateToProps)(MainPage);
