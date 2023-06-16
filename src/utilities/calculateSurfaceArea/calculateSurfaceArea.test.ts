import {
  calculateSurfaceArea,
  calculatePercentage,
} from './calculateSurfaceArea';

describe('calculateSurfaceArea()', () => {
  it('returns the surface area, when given the diameter', () => {
    expect(calculateSurfaceArea(10465)).toBe(65754);
  });
});

describe('calculcatePercentage()', () => {
  it('calculates the percentage of a surface area', () => {
    expect(calculatePercentage('10465', '1')).toBe(657.54);
  });
});
