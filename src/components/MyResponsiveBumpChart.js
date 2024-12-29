import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const ChartComponent = () => {
  useEffect(() => {
    // Names for the ranking
    const names = [
      'Orange',
      'Tomato',
      'Apple',
      'Sakana',
      'Banana',
      'Iwashi',
      'Snappy Fish',
      'Lemon',
      'Pasta'
    ];

    // Years for the x-axis
    const years = ['2001', '2002', '2003', '2004', '2005', '2006'];

    // Function to shuffle the array
    const shuffle = (array) => {
      let currentIndex = array.length;
      let randomIndex = 0;
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ];
      }
      return array;
    };

    // Function to generate ranking data
    const generateRankingData = () => {
      const map = new Map();
      const defaultRanking = Array.from({ length: names.length }, (_, i) => i + 1);
      for (const _ of years) {
        const shuffleArray = shuffle(defaultRanking);
        names.forEach((name, i) => {
          map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
        });
      }
      return map;
    };

    // Function to generate series list
    const generateSeriesList = () => {
      const seriesList = [];
      const rankingMap = generateRankingData();
      rankingMap.forEach((data, name) => {
        const series = {
          name,
          symbolSize: 20,
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          endLabel: {
            show: true,
            formatter: '{a}',
            distance: 20
          },
          lineStyle: {
            width: 4
          },
          data
        };
        seriesList.push(series);
      });
      return seriesList;
    };

    // Chart option configuration
    const option = {
      title: {
        text: 'Bump Chart (Ranking)'
      },
      tooltip: {
        trigger: 'item'
      },
      grid: {
        left: 30,
        right: 110,
        bottom: 30,
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true
        },
        axisLabel: {
          margin: 30,
          fontSize: 16
        },
        boundaryGap: false,
        data: years
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          margin: 30,
          fontSize: 16,
          formatter: '#{value}'
        },
        inverse: true,
        interval: 1,
        min: 1,
        max: names.length
      },
      series: generateSeriesList()
    };

    // Initialize the chart
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);

    // Cleanup when component is unmounted
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <h1>Bump Chart (Ranking)</h1>
      <div id="main" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default ChartComponent;
