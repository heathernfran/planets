import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { Table } from './Table';

const mockResults = [
  {
    climate: 'Climate 1',
    diameter: '500',
    name: 'Planet 1',
    population: '100',
    residents: [],
    surface_water: '50',
    terrain: 'Terrain 1',
    url: 'https://example.com/planet1',
  },
  {
    climate: 'Climate 2',
    diameter: '1000',
    name: 'Planet 2',
    population: '200',
    residents: [],
    surface_water: '0',
    terrain: 'Terrain 2',
    url: 'https://example.com/planet2',
  },
];

beforeEach(() => {
  vi.spyOn(window, 'fetch').mockResolvedValue({
    json: async () => ({ results: mockResults }),
  } as Response);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('<Table />', () => {
  it('renders the table with data', async () => {
    render(<Table />);

    expect(await screen.findByText('Planet 1')).toBeDefined();
    expect(await screen.findByText('Climate 1')).toBeDefined();
    expect(await screen.findByText('Planet 2')).toBeDefined();
    expect(await screen.findByText('Climate 2')).toBeDefined();
  });

  it('renders the loading state when data is being fetched', async () => {
    render(<Table />);
    expect(await screen.findByText(/Loading data/i)).toBeDefined();

    await waitForElementToBeRemoved(() => screen.queryByText(/Loading data/i));
    expect(screen.queryByText(/Loading data/i)).not.toBeDefined();
  });

  it('renders the error message when there is an error', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('API Error'))
    );

    render(<Table />);

    expect(await screen.findByText('Error occurred: API Error')).toBeDefined();
  });
});
