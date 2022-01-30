import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  test('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Hello World/i);
    expect(heading).toBeInTheDocument();
  });
});
