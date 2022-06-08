export function chunkStringNatural(input: string, perPage: number = 800): string[] {
  if (perPage < 2) {
    return [];
  }
  const chunks = input.split(/[\r\n]+/);
  const pages = [];
  let currentLength = 0;
  let drafts = [];
  while (chunks.length > 0) {
    const chunk = chunks.shift();
    if (chunk == null || chunk === '') {
      continue;
    }
    if (currentLength + chunk.length >= perPage) {
      const rooms = perPage - currentLength;
      // find a proper cut-off point from the current chunk
      const tokens = chunk.split(/(\s+)/);
      let boundary = 0;
      let trimmed = false;
      for (const token of tokens) {
        if (boundary + token.length > rooms) {
          // if a single token doesn't fit in the `perPage` limit, trim it on the boundary
          if (token.length > perPage) {
            boundary = rooms;
            trimmed = true;
          }
          break;
        }
        boundary += token.length;
      }
      // flush out drafts to a page
      if (trimmed) {
        const nextBoundary = boundary - 1;
        const leading = chunk.slice(0, nextBoundary);
        pages.push([...drafts, `${leading}-`].join('\n'));
        // push the remainder of the text back to chunks list
        const trailing = chunk.slice(nextBoundary);
        chunks.unshift(trailing);
      } else {
        const leading = chunk.slice(0, boundary);
        pages.push([...drafts, leading].join('\n'));
      }
      drafts = [];
      currentLength = 0;
    } else {
      drafts.push(chunk);
      // plus one for padding a line-feed character correctly
      currentLength += chunk.length + 1;
    }
  }
  // append uncompleted drafts to pages
  if (drafts.length > 0) {
    pages.push(drafts.join('\n'));
  }
  return pages;
}
