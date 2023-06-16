import { sortAlpha } from './sortAlpha';

describe('sortAlpha()', () => {
  it('sorts by name alphabetically', () => {
    const mockData = [
      {
        name: 'Tatooine',
        url: 'https://swapi.dev/api/planets/1/',
      },
      { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      { name: 'Yavin IV', url: 'https://swapi.dev/api/planets/3/' },
      { name: 'Hoth', url: 'https://swapi.dev/api/planets/4/' },
    ];
    const resultData = [
      { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      { name: 'Hoth', url: 'https://swapi.dev/api/planets/4/' },
      {
        name: 'Tatooine',
        url: 'https://swapi.dev/api/planets/1/',
      },
      { name: 'Yavin IV', url: 'https://swapi.dev/api/planets/3/' },
    ];

    expect(sortAlpha(mockData)).toEqual(resultData);
  });
});
