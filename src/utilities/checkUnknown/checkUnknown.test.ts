import { checkUnknown } from './checkUnknown';

describe('checkUnknown()', () => {
  it('returns a "?" when the input is "unknown"', () => {
    expect(checkUnknown('Unknown')).toBe('?');
  });

  it('returns the input when input is not "unknown"', () => {
    const input = 'test input';
    expect(checkUnknown(input)).toBe(input);
  });
});
