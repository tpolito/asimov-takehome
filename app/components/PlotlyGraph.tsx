import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyGraph = ({ data }) => {
  console.log(data);

  return <Plot data={[data]} />;
};

export default PlotlyGraph;
