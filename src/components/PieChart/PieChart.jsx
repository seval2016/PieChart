import React from 'react';
import './PieChart.css';
import Legend from './Legend';
import Chart from './Chart';
import BottomPieChart from './Bottom';

const PieChart = () => {
  return (
    <div className="chart-container">
      <div className="bottom-container">
        <Legend />
      </div>
      <div className="left-pie-container">
        <BottomPieChart />
      </div>
      <div className="main-pie-container">
        <Chart />
        <div className="center-text">
          Total Critical Vuln.
          <div className="center-text-value">2938921</div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
