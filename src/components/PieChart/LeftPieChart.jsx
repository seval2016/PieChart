import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const bottomData = [
  { value: 40 },
  { value:10 },
  { value: 40 },
  { value: 20 },
];

const SMALL_COLORS = ["#F0142F", "#FF9162", "#FFC122", "#37AB96"];

const LeftPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={bottomData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="100%"
          innerRadius="85%"
          fill="#8884d8"
          dataKey="value"
          cornerRadius={10}
          startAngle={164}
          endAngle={226}
          stroke="#ffffff" // White border color
          strokeWidth={2} // Border width
         
        >
          {bottomData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={SMALL_COLORS[index % SMALL_COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LeftPieChart;
