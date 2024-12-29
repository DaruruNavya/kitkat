import React, { useRef, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const CandleStickChart = () => {
  const chartRef = useRef(null);

  // Your data (the example data you gave)
  const rawData = [
    ["2015/1/5", "3258.63", "3350.52", "115.84", "3.58%", "3253.88", "3369.28", "531352384", "54976008", "-"],
    ["2015/1/6", "3330.8", "3351.45", "0.93", "0.03%", "3303.18", "3394.22", "501661696", "53239848", "-"],
    // More data...
  ];

  const colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
  const labelFont = 'bold 12px Sans-serif';

  // Function to calculate MA (Moving Average)
  function calculateMA(dayCount, data) {
    let result = [];
    for (let i = 0, len = data.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      let sum = 0;
      for (let j = 0; j < dayCount; j++) {
        sum += +data[i - j][1];
      }
      result.push((sum / dayCount).toFixed(2));
    }
    return result;
  }

  // Chart Option
  const option = {
    title: {
      text: 'Candlestick Chart with Touch',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: ['Candlestick', 'MA5', 'MA10', 'MA20'],
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: rawData.map(item => item[0]),
      boundaryGap: false,
      axisLine: { onZero: false },
    },
    yAxis: {
      type: 'value',
      scale: true,
      axisLine: { onZero: false },
      splitLine: {
        show: true,
      },
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
      {
        show: true,
        type: 'slider',
        yAxisIndex: 0,
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: 'Candlestick',
        type: 'candlestick',
        data: rawData.map(item => [item[1], item[2], item[3], item[4]]),
        itemStyle: {
          color: '#c23531',
          color0: '#2f4554',
          borderColor: '#c23531',
          borderColor0: '#2f4554',
        },
      },
      {
        name: 'MA5',
        type: 'line',
        data: calculateMA(5, rawData),
        smooth: true,
        lineStyle: {
          color: colorList[0],
        },
      },
      {
        name: 'MA10',
        type: 'line',
        data: calculateMA(10, rawData),
        smooth: true,
        lineStyle: {
          color: colorList[1],
        },
      },
      {
        name: 'MA20',
        type: 'line',
        data: calculateMA(20, rawData),
        smooth: true,
        lineStyle: {
          color: colorList[2],
        },
      },
    ],
  };

  // Initialize chart on mount
  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    // Setting the chart option
    myChart.setOption(option);

    // Resize chart when the window resizes
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      window.removeEventListener('resize', () => {
        myChart.resize();
      });
    };
  }, []);

  return (
    <div>
      <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
    </div>
  );
};

export default CandleStickChart;
