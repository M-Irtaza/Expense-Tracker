import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2022, 1, 1),
  },
  { id: "e2", title: "TV", amount: 1999.67, date: new Date(2022, 1, 4) },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 8.67,
    date: new Date(2022, 1, 8),
  },
  { id: "e4", title: "Fruits", amount: 18.67, date: new Date(2022, 1, 16) },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  function addExpenseHandler(newExpense){
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
