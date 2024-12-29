import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const ForceDirectedGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize ECharts
    const myChart = echarts.init(chartRef.current);

    // Example of custom data (replace with your data)
    const graphData = {
      nodes: [
        { id: 1, name: 'Node 1', category: 0, symbolSize: 50 },
        { id: 2, name: 'Node 2', category: 1, symbolSize: 60 },
        { id: 3, name: 'Node 3', category: 2, symbolSize: 70 },
        { id: 4, name: 'Node 4', category: 0, symbolSize: 80 },
        { id: 5, name: 'Node 5', category: 1, symbolSize: 90 },
      ],
      links: [
        { source: 1, target: 2 },
        { source: 2, target: 3 },
        { source: 3, target: 4 },
        { source: 4, target: 5 },
        { source: 5, target: 1 },
      ],
      categories: [
        { name: 'Category 1' },
        { name: 'Category 2' },
        { name: 'Category 3' },
      ],
    };

    const option = {
      title: {
        text: 'Custom Force Directed Graph',
        subtext: 'Dynamic Data Example',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      legend: [
        {
          data: graphData.categories.map((a) => a.name),
        },
      ],
      series: [
        {
          name: 'Graph',
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 100,
            edgeLength: 50,
          },
          roam: true,
          data: graphData.nodes,
          links: graphData.links,
          categories: graphData.categories,
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    };

    // Set the options to the chart
    myChart.setOption(option);

    // Resize the chart when the window is resized
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
};

export default ForceDirectedGraph;
