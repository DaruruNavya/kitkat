import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box, Paper, Typography } from '@mui/material';

// Calendar Page Component with dynamic data
const CalendarPage = () => {
  const calendarRef = useRef();
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    // Function to generate random data for a year
    const generateRandomCalendarData = (year) => {
      const date = +d3.timeParse('%Y-%m-%d')(year + '-01-01');
      const end = +d3.timeParse('%Y-%m-%d')(+year + 1 + '-01-01');
      const dayTime = 3600 * 24 * 1000;
      const data = [];

      for (let time = date; time < end; time += dayTime) {
        data.push({
          date: d3.timeFormat('%Y-%m-%d')(new Date(time)),
          value: Math.floor(Math.random() * 10000), // Random value for each day
        });
      }
      return data;
    };

    // Generate data for the current year (replace '2016' with any year you like)
    const generatedData = generateRandomCalendarData('2016');
    setCalendarData(generatedData);

    // Update calendar data every 2 seconds
    const interval = setInterval(() => {
      setCalendarData(generateRandomCalendarData('2016')); // You can change the year as needed
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const width = 960, height = 500;
    const cellSize = 13; // Adjust cell size for each day
    const padding = 30; // Padding for the chart

    const svg = d3
      .select(calendarRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove(); // Remove previous content

    const x = d3.scaleBand()
      .domain(d3.range(1, 366)) // Assuming 365 days for simplicity
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(calendarData, (d) => d.value)])
      .range([height, 0]);

    // Create a heatmap for each day in the year
    svg
      .selectAll('rect')
      .data(calendarData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => x(i + 1)) // Position each day on x-axis
      .attr('y', (d) => y(d.value)) // Position each day on y-axis based on its value
      .attr('width', cellSize)
      .attr('height', (d) => height - y(d.value)) // Adjust height based on value
      .attr('fill', (d) => d3.interpolateViridis(d.value / 10000)) // Color scale based on value

    // Add labels for the year at the top
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .text('Calendar Heatmap - Year 2016');
  }, [calendarData]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#4e73df' }}>
        Calendar Heatmap
      </Typography>
      <Paper sx={{ padding: 2, backgroundColor: '#f7f7f7' }}>
        <svg ref={calendarRef}></svg>
      </Paper>
    </Box>
  );
};

export default CalendarPage;
