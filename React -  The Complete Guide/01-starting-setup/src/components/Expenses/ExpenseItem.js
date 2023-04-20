import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react"; //define a state variable and a function that can be used to update the state variable

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //! [name for state variable, function to update the state variable] = useState(initial value for state variable); (cant be called outside component function)

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div>
        <p>other info: {props.info}</p>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
} //component

export default ExpenseItem;
