import "./App.css";
import ExpenseCard from "./components/ExpenseCard";

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
    date: new Date(2021, 2, 20),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div className="bg-[#75767675] rounded p-4 w-[50rem] shadow-md max-w-[95%] mx-auto my-2">
      {expenses.map(expense => (
        <ExpenseCard 
          id={expense.id} 
          Date={expense.date} 
          Amount={expense.amount} 
          Title={expense.title} 
        />
      ))}
    </div>
  );
}

export default App;
