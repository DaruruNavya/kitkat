import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SimpleGraphChart = () => {
  const chartDom = useRef(null);

  // Simplified graph data
  const graph = {
    nodes: [
      { id: 1, name: 'Node 1', symbolSize: 40, category: 0 },
      { id: 2, name: 'Node 2', symbolSize: 30, category: 1 },
      { id: 3, name: 'Node 3', symbolSize: 20, category: 0 },
      { id: 4, name: 'Node 4', symbolSize: 50, category: 2 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
    ],
    categories: [
      { name: 'Category 1' },
      { name: 'Category 2' },
      { name: 'Category 3' },
    ],
  };

  useEffect(() => {
    const myChart = echarts.init(chartDom.current);

    const option = {
      title: {
        text: 'Simple Graph Example',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      legend: [
        {
          data: graph.categories.map((category) => category.name),
        },
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Simple Graph',
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true,
          },
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
        },
      ],
    };

    myChart.setOption(option);

    // Cleanup on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartDom} style={{ width: '100%', height: '400px' }} />;
};

export default SimpleGraphChart;
