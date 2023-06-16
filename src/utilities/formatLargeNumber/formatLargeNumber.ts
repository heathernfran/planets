import { checkUnknown } from '../checkUnknown';

export function formatLargeNumber(input: string) {
  if (!Number.isInteger(parseInt(input))) {
    return checkUnknown(input);
  }

  const result: string[] = [];
  const inputArray = input.split('').reverse();

  for (let i = 0; i < inputArray.length; i++) {
    const currentDigit = inputArray[i];
    if ((i + 1) % 3 === 0) {
      result.push(` ${currentDigit}`);
    } else {
      result.push(currentDigit);
    }
  }

  return result.reverse().join('').trim();
}
