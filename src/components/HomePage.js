import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { faker } from '@faker-js/faker'; // For random data
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [diskUsageData, setDiskUsageData] = useState([30, 70]); // Example: 30% Free, 70% Used
  const [networkData, setNetworkData] = useState({ sent: [], received: [] });
  const [temperatureData, setTemperatureData] = useState([]);

  // Helper function to generate random data for the moving graph
  const generateRandomData = () => {
    return Array.from({ length: 20 }, () => faker.number.int({ min: 10, max: 100 }));
  };

  // Simulate network data (sent and received) and temperature data
  useEffect(() => {
    const randomData = generateRandomData();
    setData(randomData);

    setInterval(() => {
      // Update disk usage data
      setDiskUsageData([
        faker.number.int({ min: 10, max: 100 }), // Free Disk Space
        faker.number.int({ min: 10, max: 100 }), // Used Disk Space
      ]);

      // Simulate network traffic
      setNetworkData({
        sent: [...networkData.sent, faker.number.int({ min: 1, max: 100 })].slice(-20),
        received: [...networkData.received, faker.number.int({ min: 1, max: 100 })].slice(-20),
      });

      // Simulate temperature data over time
      setTemperatureData((prevData) => [
        ...prevData.slice(1),
        faker.number.float({ min: 20, max: 40 }),
      ]);
    }, 5000); // Update every 5 seconds
  }, [networkData]);

  // Highcharts options for a moving area chart (simulating a moving graph)
  const movingGraphOptions = {
    chart: {
      type: 'area', // Area chart for the moving effect
      animation: { duration: 1500 },
      backgroundColor: '#f4f4f4',
    },
    title: { text: 'Real-Time Data Movement' },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150,
      labels: { enabled: false },
    },
    yAxis: {
      title: { text: 'Value' },
    },
    series: [
      {
        name: 'Random Data',
        data: data.map((val, index) => [Date.now() - 20000 + index * 1000, val]),
        lineWidth: 2,
        color: '#4bc0c0',
        fillOpacity: 0.3,
      },
    ],
    tooltip: { pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}: <b>{point.y}</b>' },
  };

  // Highcharts options for CPU and Memory Usage (Donut chart)
  const circleChartOptions = {
    chart: { type: 'pie', animation: { duration: 2000 } },
    title: { text: 'CPU and Memory Usage' },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: {
      pie: {
        innerSize: '50%',
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Usage',
        data: [
          { name: 'CPU', y: 50, color: 'rgb(255, 99, 132)' },
          { name: 'Memory', y: 60, color: 'rgb(54, 162, 235)' },
          { name: 'Unused', y: 50, color: 'rgba(0, 0, 0, 0.1)' },
        ],
      },
    ],
  };

  // Highcharts options for Disk Usage Bar Chart
  const diskUsageBarChartOptions = {
    chart: { type: 'bar' },
    title: { text: 'Disk Usage (Used vs Free)' },
    xAxis: { categories: ['Disk'] },
    yAxis: {
      min: 0,
      title: { text: 'Percentage' },
      stackLabels: { enabled: true, style: { fontWeight: 'bold', color: 'gray' } },
    },
    tooltip: { shared: true, valueSuffix: '%' },
    plotOptions: {
      bar: {
        dataLabels: { enabled: true, format: '{y}%' },
      },
    },
    series: [
      { name: 'Free Disk', data: [diskUsageData[0]], color: 'rgb(75, 192, 192)' },
      { name: 'Used Disk', data: [diskUsageData[1]], color: 'rgb(255, 159, 64)' },
    ],
  };

  // Highcharts options for Network Traffic Line Chart (Sent vs Received)
  const networkTrafficLineChartOptions = {
    chart: { type: 'line' },
    title: { text: 'Network Traffic (Sent vs Received)' },
    xAxis: {
      categories: Array.from({ length: 20 }, (_, i) => `T${i + 1}`),
    },
    yAxis: { title: { text: 'Traffic (Mbps)' } },
    series: [
      {
        name: 'Sent',
        data: networkData.sent,
        color: '#36a2eb',
        lineWidth: 2,
      },
      {
        name: 'Received',
        data: networkData.received,
        color: '#ff9f40',
        lineWidth: 2,
      },
    ],
    tooltip: { pointFormat: '{series.name}: <b>{point.y} Mbps</b>' },
  };

  // Highcharts options for Temperature Stacked Area Chart
  const temperatureStackedAreaChartOptions = {
    chart: { type: 'area' },
    title: { text: 'Temperature Over Time' },
    xAxis: {
      categories: Array.from({ length: 20 }, (_, i) => `Time ${i + 1}`),
    },
    yAxis: {
      title: { text: 'Temperature (°C)' },
    },
    series: [
      {
        name: 'Temperature',
        data: temperatureData,
        color: '#ffcd56',
        fillOpacity: 0.5,
      },
    ],
    tooltip: { pointFormat: 'Temperature at {point.x}: <b>{point.y}°C</b>' },
  };

  // Highcharts options for Scatter Plot (Process CPU vs Memory)
  const scatterPlotOptions = {
    chart: { type: 'scatter' },
    title: { text: 'Process CPU vs Memory Usage' },
    xAxis: { title: { text: 'CPU Usage (%)' } },
    yAxis: { title: { text: 'Memory Usage (MB)' } },
    series: [
      {
        name: 'Processes',
        data: [
          [30, 200], // CPU: 30%, Memory: 200MB
          [50, 300], // CPU: 50%, Memory: 300MB
          [70, 500], // CPU: 70%, Memory: 500MB
        ],
        color: '#4bc0c0',
      },
    ],
    tooltip: { pointFormat: 'CPU: <b>{point.x}%</b>, Memory: <b>{point.y}MB</b>' },
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        System Metrics Dashboard
      </Typography>

      <Grid container spacing={3}>

        {/* Real-time Moving Graph */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Real-Time Data Movement
              </Typography>
              <HighchartsReact highcharts={Highcharts} options={movingGraphOptions} />
            </CardContent>
          </Card>
        </Grid>

        {/* CPU and Memory Usage */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                CPU and Memory Usage
              </Typography>
              <HighchartsReact highcharts={Highcharts} options={circleChartOptions} />
            </CardContent>
          </Card>
        </Grid>

        {/* Disk Usage Bar Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Disk Usage (Used vs Free)
              </Typography>
              <HighchartsReact highcharts={Highcharts} options={diskUsageBarChartOptions} />
            </CardContent>
          </Card>
        </Grid>

        {/* Network Traffic Line Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Network Traffic (Sent vs Received)
              </Typography>
              <HighchartsReact highcharts={Highcharts} options={networkTrafficLineChartOptions} />
            </CardContent>
          </Card>
        </Grid>

        {/* Temperature Stacked Area Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Temperature Over Time
              </Typography>
              <HighchartsReact highcharts={Highcharts} options={temperatureStackedAreaChartOptions} />
            </CardContent>
          </Card>
        </Grid>

        {/* Scatter Plot for Process CPU vs Memory */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Process CPU vs Memory Usage
              </Typography>
              <HighchartsReact highcharts={Highcharts} options={scatterPlotOptions} />
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default HomePage;
