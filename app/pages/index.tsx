import type { NextPage, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

// Plotly needs access to the document object so we need to use a dynamic import with ssr disabled
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/PlotlyGraph'),
  {
    ssr: false,
  }
);

const Home = ({ data }) => {
  return (
    <Box sx={{ height: '500px' }}>
      <DynamicComponentWithNoSSR data={data} />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3001/rna');
  const data = await res.json();

  return {
    props: { data },
  };
};
