import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders App correctly', () => {
    render(<App />);
    const text = screen.getByText(/planets/i);
    expect(text).toBeInTheDocument();
  });
});
