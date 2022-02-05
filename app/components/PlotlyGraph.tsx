import React from 'react';
import Plot from 'react-plotly.js';
import { IRnaData } from '../types';

interface IPlotlyGraphProps {
  data: IRnaData;
  loadingCallback: (showLoading: boolean) => void;
}

const PlotlyGraph: React.FC<IPlotlyGraphProps> = ({
  data,
  loadingCallback,
}) => {
  console.log(data);
  const { dataObj, annotations } = data;
  const { x, x0, y, color } = dataObj;
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
        },
      ]}
      onInitialized={() => loadingCallback(false)}
    />
  );
};

export default PlotlyGraph;
