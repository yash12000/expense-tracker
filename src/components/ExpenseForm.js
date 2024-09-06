import React, { useState } from "react";
import { useSnackbar } from "notistack";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const { enqueueSnackbar } = useSnackbar();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseAmount = parseFloat(amount);
    if (isNaN(expenseAmount) || expenseAmount <= 0 || !name.trim()) {
      enqueueSnackbar("Please enter valid expense details", {
        variant: "error",
      });
      return;
    }

    const expense = {
      id: Math.random(),
      name,
      date: formatDate(new Date()),
      amount: expenseAmount,
      category,
    };

    addExpense(expense);
    enqueueSnackbar("Expense added!", { variant: "success" });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense Name"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
