/*
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
-> [ [ 1 ], [ 2, 4 ], [ 3, 5, 7 ], [ 6, 8 ], [ 9 ] ]
*/

export function arrayTraverseDiagonal<T>(input: T[][]): T[][] {
  const dimension = input.length;
  return Array.from({ length: dimension * 2 - 1 }, (_, index) => index)
    .map((a) => {
      const start = a >= dimension ? a - dimension + 1 : 0;
      return Array.from({ length: a - start * 2 + 1 }, (_, index) => index)
        .map((b) => {
          const offset = start + b;
          return input[offset]![a - offset]!;
        });
    });
}
