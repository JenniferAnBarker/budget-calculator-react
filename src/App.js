import { React, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Alert from "./components/Alert";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <Form />
        <List expenses={expenses} />
      </main>
      <h1>
        {" "}
        Total Spending :{" "}
        <span className="total">
          $
          {expenses.reduce((accumulator, current) => {
            return (accumulator += current.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
