export function groupBy<T, K extends PropertyKey>(
  input: T[],
  predicate: (element: T) => K,
): Record<K, T[]> {
  return input.reduce((res, elem) => {
    const key = predicate(elem);
    res[key] = res[key] ?? [];
    res[key].push(elem);
    return res;
  }, {} as Record<K, T[]>);
}
