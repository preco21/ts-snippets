export function shallowEqual(a: unknown, b: unknown): boolean {
  if (a == null || b == null) {
    return a === b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((e, i) => e === b[i]);
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a!);
    const keysB = Object.keys(b!);
    if (keysA.length !== keysB.length) {
      return false;
    }
    return keysA.every((key, i) => key === keysB[i] && (a as any)[key] === (b as any)[key]);
  }
  return a === b;
}
