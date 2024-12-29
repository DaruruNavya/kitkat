import React, { useState, useEffect } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ForceGraph2D } from 'react-force-graph';
import Papa from 'papaparse';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const SourceDestinationGraph = () => {
  const [rowData, setRowData] = useState([]);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  const columnDefs = [
    { field: 'source', filter: true },
    { field: 'destination', filter: true },
    { field: 'label1', filter: true },
    { field: 'label2', filter: true },
    { field: 'label3', filter: true },
    { field: 'label4', filter: true },
    { field: 'label5', filter: true },
  ];

  useEffect(() => {
    // Load CSV data
    Papa.parse('/Sample_Dataset.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setRowData(result.data);
        updateGraphData(result.data);
      },
    });
  }, []);

  const updateGraphData = (data) => {
    const nodes = [];
    const links = [];
    const nodeSet = new Set();

    data.forEach(({ source, destination }) => {
      if (source && !nodeSet.has(source)) {
        nodes.push({ id: source });
        nodeSet.add(source);
      }
      if (destination && !nodeSet.has(destination)) {
        nodes.push({ id: destination });
        nodeSet.add(destination);
      }
      if (source && destination) {
        links.push({ source, target: destination });
      }
    });

    setGraphData({ nodes, links });
  };

  const onFilterChanged = (params) => {
    // Update graph based on filtered data
    const filteredData = params.api.getRenderedNodes().map((node) => node.data);
    updateGraphData(filteredData);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* AG Grid Table */}
      <div
        className="ag-theme-alpine"
        style={{
          width: '50%',
          height: '100%',
          borderRight: '1px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          domLayout="normal"
          onFilterChanged={onFilterChanged}
        />
      </div>

      {/* Force Graph Container */}
      <div
        style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#f9f9f9',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <ForceGraph2D
          graphData={graphData}
          nodeLabel={(node) => node.id}
          nodeAutoColorBy="id"
          linkWidth={2}
          linkOpacity={0.6}
          onNodeDragEnd={(node) => {
            node.fx = node.x;
            node.fy = node.y;
          }}
        />
      </div>
    </div>
  );
};

export default SourceDestinationGraph;