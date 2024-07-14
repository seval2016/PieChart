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

const COLORS = ["#311fa3", "#3F27D0", "#6A55EA", "#8271EE", "#A99DF3"];

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

  // Responsive font size calculation
  const screenWidth = window.innerWidth;
  const fontSize = screenWidth > 768 ? '16px' : screenWidth > 480 ? '12px' : '10px';

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize }}
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
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="-30" dy="10" stdDeviation="10" floodColor="#311fa3" floodOpacity="0.4" />
            </filter>
          </defs>
        </svg>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                filter={index === 1 || index === 2 ? 'url(#shadow)' : ''}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
