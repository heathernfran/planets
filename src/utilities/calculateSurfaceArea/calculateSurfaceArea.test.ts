import {
  calculateSurfaceArea,
  calculateSurfaceAreaSize,
} from './calculateSurfaceArea';

describe('calculateSurfaceArea()', () => {
  it('returns the surface area, when given the diameter', () => {
    expect(calculateSurfaceArea(10465)).toBe(65754);
  });
});

describe('calculateSurfaceAreaSize()', () => {
  it('calculates the size of a surface area, based on a given percentage', () => {
    expect(calculateSurfaceAreaSize('10465', '1')).toBe(658);
  });
});
