import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const GaugeChart = () => {
  const chartDom = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartDom.current);

    // Initial gauge data
    let gaugeData = [
      {
        value: 20,
        name: 'Perfect',
        title: {
          offsetCenter: ['0%', '-30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '-20%']
        }
      },
      {
        value: 40,
        name: 'Good',
        title: {
          offsetCenter: ['0%', '0%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '10%']
        }
      },
      {
        value: 60,
        name: 'Commonly',
        title: {
          offsetCenter: ['0%', '30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '40%']
        }
      }
    ];

    const option = {
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#464646'
            }
          },
          axisLine: {
            lineStyle: {
              width: 40
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: gaugeData,
          title: {
            fontSize: 14
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
        }
      ]
    };

    // Set initial chart options
    myChart.setOption(option);

    // Function to generate random values
    const generateRandomValue = () => +(Math.random() * 100).toFixed(2);

    // Update data every 2 seconds
    const interval = setInterval(() => {
      gaugeData[0].value = generateRandomValue();
      gaugeData[1].value = generateRandomValue();
      gaugeData[2].value = generateRandomValue();

      // Update chart with new data
      myChart.setOption({
        series: [
          {
            data: gaugeData,
          }
        ]
      });
    }, 2000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={chartDom}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default GaugeChart;
