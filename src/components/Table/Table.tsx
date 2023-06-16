import { useCallback, useEffect, useState } from 'react';
import { getData } from '../../api';
import { Loading } from '../Loading';
import {
  calculateSurfaceAreaSize,
  formatLargeNumber,
  sortAlpha,
} from '../../utilities';

interface Planet {
  climate: string;
  diameter: string;
  name: string;
  population: string;
  residents: string[];
  surface_water: string;
  terrain: string;
  url: string;
}

export function Table() {
  const [data, setData] = useState<Planet[]>([]);
  const [error, setError] = useState<Error | undefined>();

  const fetchData = useCallback(async () => {
    try {
      const { results }: { results: Planet[] } = await getData(
        'https://swapi.dev/api/planets/'
      );
      const sortedResults = sortAlpha(results);
      setData(sortedResults);
    } catch (err) {
      setError(err as Error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) return <span>Error occurred: {error.message}</span>;

  if (data.length === 0) return <Loading />;

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Climate</td>
          <td>Residents</td>
          <td>Terrain</td>
          <td>Population</td>
          <td>Surface Water</td>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            {
              climate,
              diameter,
              name,
              population,
              residents,
              surface_water,
              terrain,
              url,
            },
            index
          ) => (
            <tr key={`${name}-${index}`}>
              <td>
                <a href={url} rel="noreferrer" target="_blank">
                  {name}
                </a>
              </td>
              <td>{climate}</td>
              <td>{residents.length}</td>
              <td>{terrain}</td>
              <td>{formatLargeNumber(population)}</td>
              <td>{calculateSurfaceAreaSize(diameter, surface_water)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
