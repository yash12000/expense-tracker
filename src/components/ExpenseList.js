import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const ExpenseList = ({ expenses, deleteExpense }) => (
  <div className="expense-list">
    <h3>Recent Transactions</h3>
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>{expense.name}</span>
          <span>{expense.date}</span>
          <span>₹{expense.amount}</span>
          <FaEdit className="edit-icon" />
          <FaTrashAlt
            className="delete-icon"
            onClick={() => deleteExpense(expense.id)}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;
