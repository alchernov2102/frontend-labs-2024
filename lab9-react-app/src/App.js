import { useContext } from "react";
import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseCard from "./components/ExpenseCard";
import Context from "./context/Context";


function App() {

  const {expenses} = useContext(Context)

  return (
    <>
    <AddExpenseForm />
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
    </>
  );
}

export default App;
