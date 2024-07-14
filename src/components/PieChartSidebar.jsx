import React from 'react'

const ChartSidebar = () => {
  return (
    <div>
      <div className="chart-sidebar d-flex flex-column justify-content-center align-items-center h-100 gap-4  fs-5" style={{color:"#8F9AC3",fontWeight:"600"}}>
            <span className="chart-sidebar-item">1W</span>
            <span className="chart-sidebar-item">1M</span>
            <span className="chart-sidebar-item">3M</span>
            <span className="chart-sidebar-item" style={{color:"#162044"}}>6M</span>
            <span className="chart-sidebar-item">1Y</span>
    </div>
    </div>
  )
}

export default ChartSidebar;
