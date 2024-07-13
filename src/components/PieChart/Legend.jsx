import React from 'react';
import './Legend.css';

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="legend-color" style={{ backgroundColor: "#F0142F" }}></div>
        <span>Critical</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ backgroundColor: "#FF9162" }}></div>
        <span>High</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ backgroundColor: "#FFC122" }}></div>
        <span>Medium</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ backgroundColor: "#37AB96" }}></div>
        <span>Low</span>
      </div>
    </div>
  );
};

export default Legend;
