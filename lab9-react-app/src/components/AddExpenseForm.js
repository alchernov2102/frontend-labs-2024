import { React, useState, useContext, useEffect } from "react";
import Button from "./Button";
import Context from "../context/Context";

export default function AddExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const { expenses, setExpenses } = useContext(Context);


  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  const handleForm = () => {
    formActive === true ? setFormActive(false) : setFormActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseItem = {
      id: Date.now(),
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setExpenses([...expenses, expenseItem]);
  };

  const [formActive, setFormActive] = useState(false);

  return (
    <>
      <section className="w-[50rem] mx-auto h-auto bg-[#a894ec] p-6 rounded-md flex items-center justify-center">
        {formActive === true ? (
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-row gap-x-6">
              <input
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-x-6">
              <input
                placeholder="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex gap-x-5 justify-end">
              <Button Type={"button"} Text={"Cancel"} Action={handleForm} />
              <Button
                Type={"submit"}
                Text={"Add Expense"}
                Action={handleSubmit}
              />
            </div>
          </form>
        ) : (
          <div>
            <button
              className="bg-[#40005d] rounded-md text-white p-4 w-auto h-15"
              type="button"
              onClick={handleForm}
            >
              Add New Expense
            </button>
          </div>
        )}
      </section>
    </>
  );
}
