import React, { useState } from 'react';
import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { Center, Spinner } from '@chakra-ui/react';
import {} from '../components';
import { IRnaData } from '../types';

// Plotly needs access to the document object so we need to use a dynamic import with ssr disabled
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/PlotlyGraph'),
  {
    ssr: false,
  }
);

interface IHomeProps {
  data: IRnaData;
}

const Home: React.FC<IHomeProps> = ({ data }) => {
  const [showLoading, setShowLoading] = useState(true);
  return (
    <Center>
      {showLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          my={4}
        />
      ) : null}
      <DynamicComponentWithNoSSR data={data} loadingCallback={setShowLoading} />
    </Center>
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
