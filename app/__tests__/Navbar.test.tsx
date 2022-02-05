import { render, waitFor, fireEvent } from '@testing-library/react';
import { Navbar } from '../components';

describe('Navbar', () => {
  test('Should display logo and text', () => {
    const { getByText, getByLabelText } = render(<Navbar />);
    expect(getByText(/Takehome/i)).toBeInTheDocument();
    expect(getByLabelText(/Asimov Logo/i)).toBeInTheDocument();
  });
  test('Should render color mode button', () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole('button')).toBeInTheDocument();
  });
  test('Should change color mode when toggle button is preseed', () => {
    const { getByLabelText, getByRole, rerender } = render(<Navbar />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(getByLabelText(/Sun icon/i)).toBeInTheDocument();
    fireEvent.click(button);
    rerender(<Navbar />);

    waitFor(() => {
      expect(getByLabelText(/Moon icon/i)).toBeInTheDocument();
    });
  });
});
