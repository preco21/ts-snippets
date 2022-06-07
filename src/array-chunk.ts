export function arrayChunk<T>(input: T[], per: number): T[][] {
  return Array.from({ length: Math.ceil(input.length / per) }, (_, index) => {
    return input.slice(index * per, (index + 1) * per);
  });
}
