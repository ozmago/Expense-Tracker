import { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //Define State
  const [selectedYear, setSelectedYear] = useState("");

  //Define event handler function
  const yearSelectHandler = (event) => {
    //Define state update function
    setSelectedYear(event.target.value);
    console.log(selectedYear);

    //Call function from Expenses to pass up selectedYear
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
