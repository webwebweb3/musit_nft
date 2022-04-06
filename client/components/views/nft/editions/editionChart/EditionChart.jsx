import React from 'react';
import { useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { saleMusicTokenContract, web3 } from '../../../../../contracts';
import { useState } from 'react';

const EditionChart = ({ tokenId }) => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const tempArray = [];
  const data = {
    labels: ['Scatter'],
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
        data: [
          { x: 65, y: 75 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 },
        ],
      },
    ],
  };
  const getEvent = async () => {
    await saleMusicTokenContract.events.PurchaseChart(
      {
        filter: { tokenID: tokenId },
        fromBlock: 0,
      },
      (err, event) => {
        tempArray.push(event);
      },
    );
    console.log('temps', tempArray);
    setPurchaseHistory(tempArray);
    console.log('pur', purchaseHistory);
  };
  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    console.log('pp', purchaseHistory);
  }, [purchaseHistory]);

  return (
    <div>
      <Scatter data={data} width={400} height={400} />
    </div>
  );
};

export default EditionChart;
