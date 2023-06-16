import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Table } from './Table';

const mockResults = [
  {
    name: 'Planet 1',
    climate: 'Climate 1',
    residents: [],
    terrain: 'Terrain 1',
    population: '100',
    surface_water: '50',
    url: 'https://example.com/planet1',
  },
  {
    name: 'Planet 2',
    climate: 'Climate 2',
    residents: [],
    terrain: 'Terrain 2',
    population: '200',
    surface_water: '0',
    url: 'https://example.com/planet2',
  },
];

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: async () => ({ results: mockResults }),
  } as Response);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Table component', () => {
  it('renders the table with data', async () => {
    render(<Table />);

    expect(await screen.findByText('Planet 1')).toBeInTheDocument();
    expect(screen.getByText('Climate 1')).toBeInTheDocument();
    expect(screen.getByText('Planet 2')).toBeInTheDocument();
    expect(screen.getByText('Climate 2')).toBeInTheDocument();
  });

  it('renders the loading state when data is being fetched', async () => {
    render(<Table />);
    expect(await screen.findByText(/Loading data/i)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText(/Loading data/i));
    expect(screen.queryByText(/Loading data/i)).not.toBeInTheDocument();
  });

  it('renders the error message when there is an error', async () => {
    jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => Promise.reject(new Error('API Error')));

    render(<Table />);

    expect(
      await screen.findByText('Error occurred: API Error')
    ).toBeInTheDocument();
  });
});
