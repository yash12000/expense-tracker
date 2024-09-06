import React, { useState, useEffect } from 'react';
import WalletBalance from './components/WalletBalance';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import './styles/App.css';

const App = () => {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedBalance = localStorage.getItem('balance');
    const storedExpenses = localStorage.getItem('expenses');
    if (storedBalance) setBalance(JSON.parse(storedBalance));
    if (storedExpenses) setExpenses(JSON.parse(storedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [balance, expenses]);

  const addExpense = (expense) => {
    if (expense.amount > balance) {
      alert('Not enough balance!');
      return;
    }
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
    setBalance(balance - expense.amount);
  };

  const addIncome = (amount) => {
    setBalance(balance + amount);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(e => e.id !== id);
    setExpenses(updatedExpenses);
    const deletedExpense = expenses.find(e => e.id === id);
    setBalance(balance + deletedExpense.amount);
  };

  return (
    <div className="App">
      <WalletBalance balance={balance} />
      <IncomeForm addIncome={addIncome} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
};

export default App;
