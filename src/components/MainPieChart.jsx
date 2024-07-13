import React from 'react'
import { Container } from "react-bootstrap";
import ChartHeader from './ChartHeader';
import Chart from './PieChart/Chart';

import 'bootstrap/dist/css/bootstrap.min.css';

const pie = () => {
  return (
   <Container>
    <ChartHeader />
      <Chart />
   </Container>
  )
}

export default pie