import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ScatterBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart instance
    const myChart = echarts.init(chartRef.current);

    // Scatter plot and bar chart combined option
    const option = {
      title: {
        text: 'Scatter Plot and Bar Chart',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: 18
        }
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Scatter Plot', 'Bar Chart'],
        left: 'left',
      },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
      },
      yAxis: [
        {
          type: 'value',
          name: 'Bar Value',
          position: 'left',
          axisLine: { show: true },
        },
        {
          type: 'value',
          name: 'Scatter Value',
          position: 'right',
          axisLine: { show: true },
        },
      ],
      series: [
        {
          name: 'Scatter Plot',
          type: 'scatter',
          data: [
            [0, 20],
            [1, 40],
            [2, 55],
            [3, 35],
            [4, 50],
          ],
          symbolSize: 10,
          itemStyle: {
            color: '#ff6347',
          },
          yAxisIndex: 1, // Scatter data will be plotted on the right Y-axis
        },
        {
          name: 'Bar Chart',
          type: 'bar',
          data: [10, 20, 30, 40, 50],
          itemStyle: {
            color: '#1e90ff',
          },
        },
      ],
    };

    // Set the chart option
    myChart.setOption(option);

    // Cleanup chart instance on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '400px' }}
    ></div>
  );
};

export default ScatterBarChart;
