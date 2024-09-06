import React, { useState } from 'react';

const IncomeForm = ({ addIncome }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    addIncome(parseFloat(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
