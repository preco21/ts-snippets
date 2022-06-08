export function arrayNearestOffset<T>(
  array: T[],
  index: number,
  predicate: (element: T, index: number) => boolean,
  direction: number = -1,
): number {
  const slice = direction < 0
    ? array.slice(0, index).reverse()
    : array.slice(index + 1);
  let jumps = 0;
  for (let i = 0; i < slice.length; i++) {
    const element = slice[i]!;
    if (predicate(element, i)) {
      break;
    }
    jumps++;
  }
  return jumps;
}
