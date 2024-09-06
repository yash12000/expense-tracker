import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  return (
    <div>
      <h3>Recent Transactions</h3>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>{expense.title} - ₹{expense.amount} - {expense.category} - {expense.date}</p>
          <FaEdit onClick={() => editExpense(expense.id)} />
          <FaTrash onClick={() => deleteExpense(expense.id)} />
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
