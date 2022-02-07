import React from 'react';
import Plot from 'react-plotly.js';
import { useColorModeValue } from '@chakra-ui/react';
import { IRnaData } from '../types';

interface IPlotlyGraphProps {
  data: IRnaData;
  loadingCallback: (showLoading: boolean) => void;
}

const PlotlyGraph: React.FC<IPlotlyGraphProps> = ({
  data,
  loadingCallback,
}) => {
  const { dataObj } = data;
  const { x, x0, y, color, labels } = dataObj;
  const layout = {
    title: 'RNA Expression',
    font: {
      color: useColorModeValue('#292b34', '#fff'),
    },
    showLegend: false,
    xaxis: {
      title: 'Gene Expression',
      tickangle: -45,
      color: useColorModeValue('#292b34', '#fff'),
    },
    yaxis: {
      title: 'Count',
      color: useColorModeValue('#292b34', '#fff'),
    },
    plot_bgcolor: useColorModeValue('#fff', '#292b34'),
    paper_bgcolor: useColorModeValue('#fff', '#292b34'),
  };
  return (
    <Plot
      data={[
        {
          x,
          x0,
          y,
          marker: { color: color },
          type: 'bar',
          responsive: true,
          hovertext: labels,
        },
      ]}
      layout={layout}
      onInitialized={() => loadingCallback(false)}
      aria-label="Plotly Graph"
      useResizeHandler={true}
      style={{
        width: '100%',
      }}
    />
  );
};

export default PlotlyGraph;
