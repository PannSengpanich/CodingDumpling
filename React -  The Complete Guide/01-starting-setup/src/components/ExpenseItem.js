import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28); //(built-in function)
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">฿300,000</div>
      </div>
    </div>
  );
} //component

export default ExpenseItem;
