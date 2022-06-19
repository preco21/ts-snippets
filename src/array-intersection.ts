export function arrayIntersection<T, K>(a: T[], b: T[], predicate: (element: T) => K): T[] {
  const seen = new Set(a.map((elem) => predicate(elem)));
  return b.filter((elem) => seen.has(predicate(elem)));
}
