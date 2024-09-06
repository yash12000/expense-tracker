import React, { useState } from 'react';
import WalletBalance from './components/WalletBalance';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTrends from './components/ExpenseTrends';
import { SnackbarProvider } from 'notistack';
import './App.css';

const App = () => {
  const [balance, setBalance] = useState(4500);
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Samosa', date: 'March 20, 2024', amount: 150, category: 'Food' },
    { id: 2, name: 'Movie', date: 'March 21, 2024', amount: 300, category: 'Entertainment' },
    { id: 3, name: 'Auto', date: 'March 22, 2024', amount: 50, category: 'Travel' },
  ]);

  const addIncome = (amount) => {
    setBalance(balance + amount);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.amount);
  };

  const deleteExpense = (id) => {
    const expenseToRemove = expenses.find((expense) => expense.id === id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setBalance(balance + expenseToRemove.amount);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <h1>Expense Tracker</h1>
        <div className="dashboard">
          <WalletBalance balance={balance} />
          <IncomeForm addIncome={addIncome} />
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="content">
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          <ExpenseTrends expenses={expenses} />
        </div>
      </div>
    </SnackbarProvider>
  );
};

export default App;
