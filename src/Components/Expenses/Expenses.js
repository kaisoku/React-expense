import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2020");
  const filterHandler = (pickedYear) => {
    setPickedYear(pickedYear);
  };

  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedYear} onFilter={filterHandler} />
        <ExpenseChart expenses={filterExpenses} />
        <ExpensesList expenses={filterExpenses} />
      </Card>
    </div>
  );
}
