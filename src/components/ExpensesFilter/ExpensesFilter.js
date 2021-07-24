import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //Define event handler function
  const dropdownChangeHandler = (event) => {
    //Define event listener parameter & call the props to pass up the event object
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* Define onChange pointer and 2 way binding from Expenses state  */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
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
