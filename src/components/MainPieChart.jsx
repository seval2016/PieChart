import React from "react";
import { Container } from "react-bootstrap";
import ChartHeader from "./PieChartHeader";
import PieChart from "./PieChart/PieChart";

import "bootstrap/dist/css/bootstrap.min.css";
import ChartSidebar from "./PieChartSidebar";

const pie = () => {
  return (
    <Container>
      <ChartHeader />
      <div className="d-flex">
        <PieChart />
        <ChartSidebar />
      </div>
    </Container>
  );
};

export default pie;
