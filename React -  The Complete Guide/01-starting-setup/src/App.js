import Expenses from "./components/Expenses/Expenses";
//import React from 'react'. (no need for newer version)

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );

  /* = return React.createElement("div",{},
              React.createElement("h2",{},"Let's get started!"),
              React.createElement(Expenses,{expenses: expenses})
              );
   */
} //component is just a JS function, can return only 1 root element

export default App;
