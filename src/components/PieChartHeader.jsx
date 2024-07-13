import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";


const ChartHeader = () => {
  return (
    <div className="d-flex justify-content-between chart-header mt-4">
        <h2>Vulnerabilities by OS</h2>
        <div className="icons-container">
          <div className="icon-group d-flex gap-4 fs-5">
            <span className="icon">
              <FaEllipsisV />
              <FaEllipsisV />
            </span>
            <span className="icon">
              <SlSizeFullscreen />
            </span>
            <span className="icon">
              <FaEllipsisV />
            </span>
          </div>
        </div>
    </div>
  );
};

export default ChartHeader;
