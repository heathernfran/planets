import { formatLargeNumber } from './formatLargeNumber';

describe('formatLargeNumber()', () => {
  it('returns a large number with spaces between every 3 digits', () => {
    expect(formatLargeNumber('123456')).toBe('123 456');
  });

  it('returns a large number with spaces, when the input length is not divisible by 3', () => {
    expect(formatLargeNumber('1234')).toBe('1 234');
    expect(formatLargeNumber('12345')).toBe('12 345');
    expect(formatLargeNumber('1234567')).toBe('1 234 567');
  });

  it('returns the same number when there are 3 digits', () => {
    expect(formatLargeNumber('123')).toBe('123');
  });

  it('returns the same number when there are fewer than 3 digits', () => {
    expect(formatLargeNumber('12')).toBe('12');
  });
});
