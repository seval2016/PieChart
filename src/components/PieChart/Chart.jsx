import React from 'react';
import './Chart.css';
import Legend from './Legend';
import MainPieChart from './MainPieChart';
import BottomPieChart from './Bottom';

const Chart = () => {
  return (
    <div className="chart-container">
      <div className="bottom-container">
        <Legend />
      </div>
      <div className="left-pie-container">
        <BottomPieChart />
      </div>
      <div className="main-pie-container">
        <MainPieChart />
        <div className="center-text">
          Total Critical Vuln.
          <div className="center-text-value">2938921</div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
