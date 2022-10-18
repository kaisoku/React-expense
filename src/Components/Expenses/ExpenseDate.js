import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("fr-fr", { month: "long" });
  const year = props.date.getFullYear();
  const date = props.date.toLocaleString("fr-fr", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
