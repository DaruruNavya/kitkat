import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const AirQualityChart = () => {
  const chartDom = useRef(null);

  // Function to generate random air quality data
  const generateRandomData = (numEntries) => {
    const pollutionLevels = ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'];

    const randomData = [];
    for (let i = 1; i <= numEntries; i++) {
      const AQI = Math.floor(Math.random() * 301);  // AQI between 0 and 300
      const PM25 = Math.floor(Math.random() * 101); // PM2.5 between 0 and 100
      const PM10 = Math.floor(Math.random() * 151); // PM10 between 0 and 150
      const CO = (Math.random() * 2).toFixed(2);  // CO between 0 and 2
      const NO2 = Math.floor(Math.random() * 101); // NO2 between 0 and 100
      const SO2 = Math.floor(Math.random() * 51);  // SO2 between 0 and 50

      // Generate random pollution level based on AQI
      let pollutionLevel = '优';
      if (AQI > 200) pollutionLevel = '严重污染';
      else if (AQI > 150) pollutionLevel = '重度污染';
      else if (AQI > 100) pollutionLevel = '中度污染';
      else if (AQI > 50) pollutionLevel = '良';

      randomData.push([
        i, AQI, PM25, PM10, CO, NO2, SO2, pollutionLevel
      ]);
    }

    return randomData;
  };

  const dataBJ = generateRandomData(31);  // Generating 31 random data entries for Beijing
  const dataGZ = generateRandomData(31);  // Generating random data for Guangzhou
  const dataSH = generateRandomData(31);  // Generating random data for Shanghai

  const schema = [
    { name: 'date', index: 0, text: '日期' },
    { name: 'AQIindex', index: 1, text: 'AQI' },
    { name: 'PM25', index: 2, text: 'PM2.5' },
    { name: 'PM10', index: 3, text: 'PM10' },
    { name: 'CO', index: 4, text: ' CO' },
    { name: 'NO2', index: 5, text: 'NO2' },
    { name: 'SO2', index: 6, text: 'SO2' },
    { name: '等级', index: 7, text: '等级' }
  ];

  useEffect(() => {
    const myChart = echarts.init(chartDom.current);

    const lineStyle = {
      width: 1,
      opacity: 0.5
    };

    const option = {
      backgroundColor: '#333',
      legend: {
        bottom: 30,
        data: ['Beijing', 'Shanghai', 'Guangzhou'],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },
      tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1
      },
      parallelAxis: [
        {
          dim: 0,
          name: schema[0].text,
          inverse: true,
          max: 31,
          nameLocation: 'start'
        },
        { dim: 1, name: schema[1].text },
        { dim: 2, name: schema[2].text },
        { dim: 3, name: schema[3].text },
        { dim: 4, name: schema[4].text },
        { dim: 5, name: schema[5].text },
        { dim: 6, name: schema[6].text },
        {
          dim: 7,
          name: schema[7].text,
          type: 'category',
          data: ['x', 'y', 'z', 'a', 'b', 'c']
        }
      ],
      visualMap: {
        show: true,
        min: 0,
        max: 150,
        dimension: 2,
        inRange: {
          color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
        }
      },
      parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
          type: 'value',
          name: 'AQI指数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#fff',
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: '#aaa'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#777'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          name: 'Beijing',
          type: 'parallel',
          lineStyle: lineStyle,
          data: dataBJ
        },
        {
          name: 'Shanghai',
          type: 'parallel',
          lineStyle: lineStyle,
          data: dataSH
        },
        {
          name: 'Guangzhou',
          type: 'parallel',
          lineStyle: lineStyle,
          data: dataGZ
        }
      ]
    };

    myChart.setOption(option);
  }, []);

  return (
    <div
      ref={chartDom}
      style={{ width: '100%', height: '500px' }}
    />
  );
};

export default AirQualityChart;
