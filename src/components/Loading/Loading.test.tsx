import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('<Loading />', () => {
  it('renders Loading correctly', () => {
    render(<Loading />);
    const text = screen.getByText(/loading data/i);
    expect(text).toBeInTheDocument();
  });
});
