
export function clearModuleCache(
  moduleId: string,
): void {
  const mod = require.cache[moduleId];
  if (mod == null) {
    return;
  }
  // recursively remove descendants from cache
  for (const child of mod.children) {
    clearModuleCache(child.id);
  }
  // remove itself from module parent
  if (mod.parent?.children != null) {
    const targetIndex = mod.parent.children.findIndex((child) => child === mod);
    mod.parent.children.splice(targetIndex, 1);
  }
  // remove itself
  delete require.cache[mod.id];
}
