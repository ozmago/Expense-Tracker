import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
const Expenses = (props) => {
  //Create a function we can call from ExpensesFilter to pass up Year selection
  const yearHandler = (yearSelected) => {
    //Define state variable from child component
    const selectedYear = {
      yearSelected,
    };

    //console.log and check if the selectedYear is logged from this parent component and the state is lifted
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={yearHandler} />
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      />
    </Card>
  );
};

export default Expenses;
