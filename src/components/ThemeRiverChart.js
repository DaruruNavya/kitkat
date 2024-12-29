import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Function to generate random data
const generateRandomData = () => {
  const rawData = [];
  const labels = [
    'The Sea and Cake',
    'Andrew Bird',
    'Laura Veirs',
    'Brian Eno',
    'Christopher Willits',
    'Wilco',
    'Edgar Meyer',
    'Béla Fleck',
    'Fleet Foxes',
    'Kings of Convenience',
    'Brett Dennen',
    'Psapp',
    'The Bad Plus',
    'Feist',
    'Battles',
    'Avishai Cohen',
    'Rachael Yamagata',
    'Norah Jones',
    'Béla Fleck and the Flecktones',
    'Joshua Redman'
  ];

  // Generate random data
  for (let i = 0; i < labels.length; i++) {
    const dataRow = [];
    for (let j = 0; j < 20; j++) {
      dataRow.push(Math.floor(Math.random() * 100)); // Random number between 0 and 100
    }
    rawData.push(dataRow);
  }

  const data = [];
  for (let i = 0; i < rawData.length; i++) {
    for (let j = 0; j < rawData[i].length; j++) {
      data.push([j, rawData[i][j], labels[i]]);
    }
  }

  return data;
};

const ThemeRiverChart = () => {
  const chartDom = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartDom.current);

    // Function to update chart with random data
    const updateChartData = () => {
      const newData = generateRandomData(); // Get random data
      const option = {
        singleAxis: {
          max: 'dataMax',
        },
        series: [
          {
            type: 'themeRiver',
            data: newData,
            label: {
              show: false,
            },
          },
        ],
      };

      myChart.setOption(option); // Update chart with new random data
    };

    // Initial chart setup
    updateChartData();

    // Update chart data every 2 seconds
    const interval = setInterval(updateChartData, 2000);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
      myChart.dispose(); // Dispose the chart instance
    };
  }, []);

  return <div ref={chartDom} style={{ width: '100%', height: '400px' }} />;
};

export default ThemeRiverChart;
