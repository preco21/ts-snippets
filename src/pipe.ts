export function pipe<T, F extends (input: T) => T>(fns: F[]) {
  return (input: T): T => fns.reduce<T>((res, fn) => fn(res), input);
}
