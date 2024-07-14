import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './PieChart.css'; // CSS dosyasını import edin

const data = [
  { name: "Android", value: 37 },
  { name: "Windows", value: 24 },
  { name: "iOS", value: 18 },
  { name: "Linux", value: 11 },
  { name: "Mac OS", value: 10 },
];

const COLORS = ["#311fa3", "#8271EE", "#A99DF3", "#3F27D0", "#6A55EA"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
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
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "16px" }}
    >
      <tspan x={x} dy="0em">{data[index].name}</tspan>
      <tspan x={x} dy="1.2em" fontWeight={"bold"}>{`${data[index].value}%`}</tspan>
    </text>
  );
};

const Chart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="80%"
            innerRadius="40%"
            fill="#8884d8"
            dataKey="value"
            cornerRadius={10}
            startAngle={85}
            endAngle={-273}
            stroke="#fff"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
