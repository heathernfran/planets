import {
  calculateSurfaceArea,
  calculateSurfaceAreaSize,
} from './calculateSurfaceArea';

describe('calculateSurfaceArea()', () => {
  it('returns the surface area, when given the diameter', () => {
    expect(calculateSurfaceArea(10465)).toBe(65754);
  });
});

describe('calculcatecalculateSurfaceAreaSizePercentage()', () => {
  it('calculates the percentage of a surface area', () => {
    expect(calculateSurfaceAreaSize('10465', '1')).toBe(658);
  });
});
