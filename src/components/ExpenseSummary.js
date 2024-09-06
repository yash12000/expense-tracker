import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ExpenseSummary = ({ expenses }) => {
  const data = [
    { name: 'Food', value: expenses.filter(e => e.category === 'Food').reduce((a, b) => a + b.amount, 0) },
    { name: 'Entertainment', value: expenses.filter(e => e.category === 'Entertainment').reduce((a, b) => a + b.amount, 0) },
    { name: 'Travel', value: expenses.filter(e => e.category === 'Travel').reduce((a, b) => a + b.amount, 0) },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseSummary;
