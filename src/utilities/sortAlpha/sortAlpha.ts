export function sortAlpha<T extends { name: string }>(data: T[]) {
  const sortedData = [...data].sort((a, b) => {
    return a['name'].localeCompare(b['name']);
  });
  return sortedData;
}
