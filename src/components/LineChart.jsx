import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [{
      label: 'Price USD',
      data: coinPrice,
      fill: false,
      backgroundColor: '#0071bd',
      borderColor: '#0071bd'
    }]
  }

  const options = {
    scales: {
      yAxes: [
        { 
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price: {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} option={options} />
    </>
  )
}


export default LineChart

//we need to loop over 'coinHistory' to get the 'prices' and 'timestamps'
//we make the coinPrice and coinTimeStamp array
//we push each price into the coinPrice array, as well as coinTimeStamp
//we use 'Date()' & 'toLocaleDateString()' to convert the coinTimeStamp into a readable date