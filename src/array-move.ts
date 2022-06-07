export function arrayMove<T>(
  input: T[],
  rangeOrIndex: [number, number] | number,
  insertIndex: number,
): T[] {
  const [startRange, endRange] = Array.isArray(rangeOrIndex)
    ? rangeOrIndex
    : [rangeOrIndex, rangeOrIndex + 1];
  const range = input.slice(startRange, endRange);
  const rangeWithout = [...input.slice(0, startRange), ...input.slice(endRange)];
  return [
    ...rangeWithout.slice(0, insertIndex),
    ...range,
    ...rangeWithout.slice(insertIndex),
  ];
}
