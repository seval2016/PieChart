import React from 'react'
import { Container } from "react-bootstrap";
import ChartHeader from './ChartHeader';
import PieChart from './PieChart/PieChart';

import 'bootstrap/dist/css/bootstrap.min.css';

const pie = () => {
  return (
   <Container>
    <ChartHeader />
      <PieChart />
   </Container>
  )
}

export default pie