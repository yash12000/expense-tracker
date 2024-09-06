import React, { useState } from 'react';
import { Modal } from 'react-modal';
import { useSnackbar } from 'notistack';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      enqueueSnackbar('All fields are required', { variant: 'error' });
      return;
    }

    addExpense({ title, amount: parseFloat(amount), category, date });
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
