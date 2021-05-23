import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  

  function handeltitle(event) {
    setTitle(event.target.value);
  }

  function handelamount(event) {
    setAmount(event.target.value);
  }

  function handeldate(event) {
    setDate(event.target.value);
  }

  function handelSubmit(event) {
    event.preventDefault();
    setTitle("");
    setAmount("");
    setDate("");

    const ExpenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(ExpenseData);
  }

  return (
        <form onSubmit={handelSubmit}>
          <div className="new-expense__actions">
            <div className="new-expense__controls">
              <div className="new-expense__controls">
                <label>Title</label>
                <input
                  className="Exinput"
                  type="text"
                  onChange={handeltitle}
                  value={title}
                />
              </div>
              <div className="new-expense__controls">
                <label>Amount</label>
                <input
                  className="Exinput"
                  type="num"
                  min="0.01"
                  step="0.01"
                  onChange={handelamount}
                  value={amount}
                />
              </div>
              <div className="new-expense__controls">
                <label>Date</label>
                <input
                  className="Exinput"
                  type="date"
                  min="2020-01-01"
                  max="2022-12-31"
                  onChange={handeldate}
                  value={date}
                />
              </div>
            </div>
            <button className=".btn" type="button" onClick={props.onCancel}>Cancel</button>
            <button className=".btn" type="submit">Add Expense</button>
          </div>
        </form>
  );
};

export default ExpenseForm;
