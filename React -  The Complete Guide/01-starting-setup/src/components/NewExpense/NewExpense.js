import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //enteredExpenseData is expenseData from ExpenseForm
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData); //prop.onAddExpense calls addExpenseHandler function with parameter expenseData
    setIsEditing(false);
  };
  const showForm = () => {
    setIsEditing(true);
  };
  const hideForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && ( // && means to render something according to condition
        <button onClick={showForm}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
};
export default NewExpense;
