import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="price-div">
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
