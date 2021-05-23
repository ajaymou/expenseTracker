import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredDate, setfilteredDate] = useState("2021");

  const handeldateevent = (date) => {
    setfilteredDate(date);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredDate;
  });

  console.log(filteredExpenses);

  return (
    <div className="exp-div-main">
      <ExpenseFilter
        selected={filteredDate}
        onSaveFilterDate={handeldateevent}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filterExpense={filteredExpenses} />
    </div>

  );
};

export default Expenses;
