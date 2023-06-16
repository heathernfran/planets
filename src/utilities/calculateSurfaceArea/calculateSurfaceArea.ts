import { checkUnknown } from '../checkUnknown';

export function calculateSurfaceArea(diameter: number) {
  const radius = diameter / 2;
  const surfaceArea = Math.PI * radius * 4;
  return Math.round(surfaceArea);
}

export function calculateSurfaceAreaSize(
  diameter: string,
  percentageSurfaceArea: string
) {
  const parsedDiameter = parseInt(diameter);
  const parsedPercentageSurfaceArea = parseInt(percentageSurfaceArea);
  if (!Number.isInteger(parsedDiameter)) {
    return checkUnknown(diameter);
  }
  if (!Number.isInteger(parsedPercentageSurfaceArea)) {
    return checkUnknown(percentageSurfaceArea);
  }

  const totalSurfaceArea = calculateSurfaceArea(parsedDiameter);
  const calculation = (parsedPercentageSurfaceArea * totalSurfaceArea) / 100;
  return Math.round(calculation);
}
