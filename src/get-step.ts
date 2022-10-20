export function getStep(number: number, base: number = 10000): [number, number] {
  const step = Math.floor(Math.log10(Math.abs(number)) / Math.log10(base));
  const divisor = Math.pow(base, step);
  return [number / divisor, step];
}
