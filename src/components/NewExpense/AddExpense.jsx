import React, { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [btnclick, setbtnclick] = useState(false);

  const handelonClick = () => {
    setbtnclick(true);
  };

   const handelCancel = () => {
    setbtnclick(false);
  };

  const handelSubmit = () => {
      setbtnclick(false)
  }

  const handelOnSaveHandel = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
    setbtnclick(false)
  };

  return (
    <div className="new-expense">
      {btnclick && <ExpenseForm onSaveExpenseData={handelOnSaveHandel} onCancel={handelCancel} onSubmit={handelSubmit}/> }
      {!btnclick && <button type="submit" onClick={handelonClick}> Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
