import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ExpenseTrends = ({ expenses }) => {
  const data = [
    { name: 'Food', amount: expenses.filter(e => e.category === 'Food').reduce((a, b) => a + b.amount, 0) },
    { name: 'Entertainment', amount: expenses.filter(e => e.category === 'Entertainment').reduce((a, b) => a + b.amount, 0) },
    { name: 'Travel', amount: expenses.filter(e => e.category === 'Travel').reduce((a, b) => a + b.amount, 0) },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="amount" fill="#82ca9d" />
    </BarChart>
  );
};

export default ExpenseTrends;
