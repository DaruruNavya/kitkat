import React from 'react';
import ForceDirectedGraph from './ForceDirectedGraph';
import BarChartComponent from './BarChartComponent';
import GaugeChart from './GaugeChart';
import CustomChart from './CustomChart';
import ScatterBarChart from './ScatterBarChart';
import CandleStickChart from './CandleStickChart';
import ThemeRiverChart from './ThemeRiverChart';
import SimpleGraphChart from './SimpleGraphChart';
import MyResponsiveBumpChart from './MyResponsiveBumpChart';
import AirQualityChart from './AirQualityChart';
const OverviewPage = () => {
  return (
    <div className="overview-container">

      {/* First row of charts */}
      <div className="chart-row">
        {/* Force-Directed Graph */}
        <div className="chart-container">
          <h3>Force-Directed Graph</h3>
          <ForceDirectedGraph />
        </div>

        {/* Gauge Chart */}
        <div className="chart-container">
          <h3>Gauge Chart</h3>
          <GaugeChart />
        </div>

        {/* Bar Chart */}
        <div className="chart-container">
          <h3>Bar Chart</h3>
          <BarChartComponent />
        </div>
      </div>

      {/* Second row of charts */}
      <div className="chart-row">
        {/* Custom Chart */}
        <div className="chart-container">
          <h3>Custom Chart</h3>
          <CustomChart />
        </div>

        {/* Scatter and Bar Chart */}
        <div className="chart-container">
          <h3>Scatter and Bar Chart</h3>
          <ScatterBarChart />
        </div>
      </div>

      {/* Third row of charts */}
      <div className="chart-row">
        {/* CandleStick Chart */}
        <div className="chart-container">
          <h3>CandleStick Chart</h3>
          <CandleStickChart />
        </div>

        {/* Theme River Chart */}
        <div className="chart-container">
          <h3>Theme River Chart</h3>
          <ThemeRiverChart />
        </div>
      </div>

      {/* Fourth row of charts */}
      <div className="chart-row">
        {/* Simple Graph Chart */}
        <div className="chart-container">
          <h3>Simple Graph Chart</h3>
          <SimpleGraphChart />
        </div>

        {/* My Responsive Bump Chart */}
        <div className="chart-container">
          <h3>Responsive Bump Chart</h3>
          <MyResponsiveBumpChart />
        </div>
        <div className="chart-container">
          <h3>AirQualityChartt</h3>
          <AirQualityChart />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
