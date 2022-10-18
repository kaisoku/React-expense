import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const saveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveHandler} />
    </div>
  );
}
