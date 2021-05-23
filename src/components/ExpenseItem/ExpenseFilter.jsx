import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  function handelevent(event) {
    props.onSaveFilterDate(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="lb">
          <label>Filter by year</label>
        </div>
        <div className="sl">
          <select value={props.selected} onChange={handelevent}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
