export function checkUnknown(input: string) {
  return input.toLocaleLowerCase() === 'unknown' ? '?' : input;
}
