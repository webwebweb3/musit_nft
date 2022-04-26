import React from 'react';
import { useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { saleMusicTokenContract, web3 } from '$contracts';
import { useState } from 'react';
import { marketPlaceGetEventAction } from '$reduxsaga/request/marketPlace_request';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

const EditionChart = ({ tokenId }) => {
  const dispatch = useDispatch();
  const { eventData } = useSelector(state => state.market);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const chartOptions = {
    maintainAspectRatio: false,
    showLine: false,
    scales: {
      xAxes: [
        {
          display: true,
          labelString: 'Frequency (Hz)',
        },
      ],
      yAxes: [
        {
          display: true,
          labelString: 'Frequency (Hz)',
        },
      ],
    },
  };
  let data;
  if (eventData) {
    if (eventData.length !== 0) {
      const tempXArray = [];
      const tempYArray = [];
      for (let i = 0; i < eventData.length; i++) {
        const timeStamp = eventData[i].returnValues.timeStamp * 1000;
        const date = new Date(timeStamp);
        console.log('날짜!', date);

        const data = {
          buyer: eventData[i].returnValues.buyer,
          price: web3.utils.fromWei(eventData[i].returnValues.price),
        };
        tempXArray.push(date.toLocaleDateString());
        tempYArray.push(data.price);
      }
      data = {
        labels: tempXArray,
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: tempYArray,
          },
        ],
      };

      console.log(tempXArray);
      console.log(tempYArray);
    }
  }
  const getEvent = async () => {
    dispatch(marketPlaceGetEventAction(tokenId));
  };

  useEffect(() => {
    if (!eventData) getEvent();
    console.log('이벤트 데이터', eventData);
  }, [eventData]);

  return (
    <>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box sx={{ width: '100%', height: '100%' }}>
          {eventData && eventData.length !== 0 ? (
            <Line data={data} width={400} height={400} />
          ) : (
            <Box
              sx={{
                display: 'inline-block',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
              }}
            >
              이전 판매 기록이 없습니다
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default EditionChart;
