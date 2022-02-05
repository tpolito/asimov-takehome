import { render, waitFor } from '@testing-library/react';
import Home from '../pages/index';

const mockData = {
  annotations: [
    {
      Gene: 'Heavy chain',
      range: [0, 100],
    },
  ],
  dataObj: {},
};

describe('Home', () => {
  test('Should show loading while graph is loading', () => {
    const { getByLabelText } = render(<Home data={mockData} />);
    expect(getByLabelText(/Loading.../i)).toBeInTheDocument();
  });

  test('Should hide loading once graph has loaded', () => {
    const { getByLabelText } = render(<Home data={mockData} />);

    waitFor(() => {
      expect(getByLabelText(/Plotly Graph/i)).toBeInTheDocument();
      expect(getByLabelText(/Loading.../i)).not.toBeInTheDocument();
    });
  });
});
