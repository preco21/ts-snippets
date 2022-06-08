export function binarySearch(
  input: number[],
  target: number,
): number {
  let min = 0;
  let max = input.length - 1;
  while (min <= max) {
    const center = (min + max) | 0;
    const item = input[center]!;
    if (item > target) {
      max = center - 1;
    } else if (item < target) {
      min = center + 1;
    } else {
      return center;
    }
  }
  return -1;
}
