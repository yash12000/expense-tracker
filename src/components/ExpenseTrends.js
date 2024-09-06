import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data for pie chart and bar chart
const data = [
  { name: "Food", value: 150 },
  { name: "Entertainment", value: 300 },
  { name: "Travel", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Expense Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend below the pie chart */}
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          {data.map((entry, index) => (
            <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: COLORS[index % COLORS.length],
                  marginBottom: 5,
                }}
              ></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>

        {/* Bar Chart for top expenses */}
        <h3 style={{ marginTop: 40 }}>Top Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-bar-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
