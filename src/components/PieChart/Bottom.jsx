import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const bottomData = [
  { value: 70 },
  { value: 15 },
  { value: 70 },
  { value: 30 },
];

const SMALL_COLORS = ["#F0142F", "#FF9162", "#FFC122", "#37AB96"];

const BottomPieChart = () => {
  return (
    <ResponsiveContainer width={800} height={800}>
      <PieChart>
        <Pie
          data={bottomData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={330}
          innerRadius={270}
          fill="#8884d8"
          dataKey="value"
          cornerRadius={10}
          startAngle={157}
          endAngle={232}
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

export default BottomPieChart;
