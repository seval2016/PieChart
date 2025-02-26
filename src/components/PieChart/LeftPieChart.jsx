import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const bottomData = [
  { value: 40 },
  { value: 10 },
  { value: 40 },
  { value: 20 },
];

const SMALL_COLORS = ["#F0142F", "#FF9162", "#FFC122", "#37AB96"];

const LeftPieChart = () => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cornerRadius = screenWidth > 768 ? 10 : 5;

  return (
    <div className="left-pie-container">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="shadow1" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="-15" dy="20" stdDeviation="10" floodColor="#311fa3" floodOpacity="0.1" />
          </filter>
        </defs>
      </svg>
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
            cornerRadius={cornerRadius}
            startAngle={164}
            endAngle={226}
            stroke="#ffffff"
            strokeWidth={2}
            filter="url(#shadow1)"
            paddingAngle={1}
          >
            {bottomData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={SMALL_COLORS[index % SMALL_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeftPieChart;
