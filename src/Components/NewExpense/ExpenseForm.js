import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("2019-01-01");
  const [clicked, setClicked] = useState(false);
  /* const [userInput, setUserInput] = useState({
    title: "",
    date: "2019-01-01",
    amount: 0
  }); */
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    /* setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value
      };
    }); */
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    /* setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value
      };
    }); */
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    /* setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value
      };
    }); */
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date)
    };
    props.onSave(expenseData);
    setTitle("");
    setAmount(0);
    setDate("");
    showFormHandler();
  };

  const showFormHandler = () => {
    setClicked(!clicked);
  };

  let hiddenForm = (
    <button type="button" onClick={showFormHandler}>
      Add New Ecpense
    </button>
  );

  if (!clicked) {
    return hiddenForm;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">
            Title <br />
            <input
              type="text"
              id="tiltle"
              value={title}
              onChange={titleChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">
            Date
            <br />
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              id="date"
              value={date}
              onChange={dateChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">
            Amount
            <br />
            <input
              type="number"
              min="0.01"
              step="0.01"
              id="amount"
              value={amount}
              onChange={amountChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>{" "}
        <button type="reset" onClick={showFormHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}
