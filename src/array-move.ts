export function arrayMove<T>(
  input: T[],
  rangeOrIndex: [number, number] | number,
  insertIndex: number,
): T[] {
  const [startRange, endRange] = Array.isArray(rangeOrIndex)
    ? rangeOrIndex
    : [rangeOrIndex, rangeOrIndex + 1];
  const rangeWithout = [...input.slice(0, startRange), ...input.slice(endRange)];
  return [
    ...rangeWithout.slice(0, insertIndex),
    ...input.slice(startRange, endRange),
    ...rangeWithout.slice(insertIndex),
  ];
}
