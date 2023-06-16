import { useCallback, useEffect, useState } from 'react';
import { getData } from '../../api';
import { Loading } from '../Loading';

interface Planet {
  name: string;
  climate: string;
  residents: string[];
  terrain: string;
  population: string;
  surface_water: string;
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
      setData(results);
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
        {data.map((value, index) => (
          <tr key={index}>
            <td>
              <a href={value.url} rel="noreferrer" target="_blank">
                {value.name}
              </a>
            </td>
            <td>{value.climate}</td>
            <td>{value.residents.length}</td>
            <td>{value.terrain}</td>
            <td>{value.population}</td>
            <td>{value.surface_water}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
