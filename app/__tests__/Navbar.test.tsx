import { render, waitFor } from '@testing-library/react';
import { Navbar } from '../components';

describe('Navbar', () => {
  test('Should display logo and text', () => {
    const { getByText, getByLabelText } = render(<Navbar />);
    expect(getByText(/Takehome/i)).toBeInTheDocument();
    expect(getByLabelText(/Asimov Logo/i)).toBeInTheDocument();
  });
});
