import React, { useState } from "react";
import NewExpense from "./components/NewExpense/AddExpense.jsx";
import Expenses from "./components/ExpenseItem/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "new iphone",
    amount: 45000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 20000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 50000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setNewExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandel = (expense) => {
    setNewExpenses( prev_Expenses => {
      return [expense, ...prev_Expenses]
    } );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandel} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
