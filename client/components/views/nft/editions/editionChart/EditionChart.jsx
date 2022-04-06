import React from 'react';
import { useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { saleMusicTokenContract, web3 } from '../../../../../contracts';
import { useState } from 'react';
import { marketPlaceGetEventAction } from '../../../../../_request/marketPlace_request';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

const EditionChart = ({ tokenId }) => {
  const dispatch = useDispatch();
  const { eventData } = useSelector(state => state.market);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const options = {
    legend: {
      labels: {
        fontColor: 'blue',
        fontSize: 18,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: 'green',
            fontSize: 18,
            stepSize: 1,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: 'purple',
            fontSize: 14,
            stepSize: 1,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  let data;
  if (eventData) {
    if (eventData.length !== 0) {
      const tempArray = [];
      for (let i = 0; i < eventData.length; i++) {
        const time = eventData[i].blockNumber;
        const data = {
          buyer: eventData[i].returnValues.buyer,
          price: web3.utils.fromWei(eventData[i].returnValues.price),
        };
        tempArray.push({ x: time, y: data.price });
      }
      data = {
        labels: ['Scatter', 'asdf', 'basdf'],
        datasets: [
          {
            label: '구매 이력',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: tempArray,
          },
        ],
      };
      console.log(tempArray);
    }
  }
  const getEvent = async () => {
    dispatch(marketPlaceGetEventAction(tokenId));
  };

  useEffect(() => {
    if (!eventData) getEvent();
    console.log(eventData);
  }, [eventData]);

  return (
    <Box>
      {eventData && eventData.length !== 0 ? (
        <Scatter data={data} width={400} height={400} options={options} />
      ) : (
        <Box>이전 판매 기록이 없습니다</Box>
      )}
    </Box>
  );
};

export default EditionChart;
