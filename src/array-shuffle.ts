export function arrayShuffle<T>(input: T[]): T[] {
  return input.reduce((res, _, index) => {
    const nextIndex = Math.floor(Math.random() * index);
    [res[index], res[nextIndex]] = [res[nextIndex]!, res[index]!];
    return res;
  }, [...input]);
}

export function arrayShuffleWithRepetition<T>(input: T[]): T[] {
  return input.map((_, index, original) => {
    return original[Math.floor(Math.random() * (original.length - index))]!;
  });
}
