import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const CustomChart = () => {
  // Initialize state for the series data
  const [data, setData] = useState({
    reindeerData: [
      [10, 20],
      [30, 40],
      [50, 60],
      [70, 80],
    ],
    planeData: [
      [15, 25],
      [35, 45],
      [55, 65],
      [75, 85],
    ],
  });

  // Function to update data (simulate dynamic data changes)
  const updateData = () => {
    setData({
      reindeerData: [
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
      ],
      planeData: [
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
      ],
    });
  };

  // Use useEffect to update data every 2 seconds
  useEffect(() => {
    const interval = setInterval(updateData, 2000); // Update data every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Chart option with dynamic data
  const option = {
    title: {
      text: 'Custom Path Symbols Example',
    },
    xAxis: {
      type: 'value',
      name: 'X Axis',
    },
    yAxis: {
      type: 'value',
      name: 'Y Axis',
    },
    series: [
      {
        symbol: 'path://M10 10 L20 10 L20 20 L10 20 Z', // Custom path for reindeer
        type: 'scatter',
        data: data.reindeerData, // Dynamic data for reindeer
        symbolSize: 20,
        label: {
          show: true,
          formatter: 'Reindeer',
        },
      },
      {
        symbol: 'path://M10 10 L30 30 L50 10 Z', // Custom path for plane
        type: 'scatter',
        data: data.planeData, // Dynamic data for plane
        symbolSize: 20,
        label: {
          show: true,
          formatter: 'Plane',
        },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default CustomChart;
