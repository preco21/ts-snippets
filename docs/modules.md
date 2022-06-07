# ts-snippets

## Table of contents

### Functions

- [arrayChunk](modules.md#arraychunk)
- [arrayMove](modules.md#arraymove)
- [deepEqual](modules.md#deepequal)
- [generateId](modules.md#generateid)
- [shallowEqual](modules.md#shallowequal)

## Functions

### arrayChunk

▸ **arrayChunk**<`T`\>(`input`, `per`): `T`[][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |
| `per` | `number` |

#### Returns

`T`[][]

#### Defined in

[array-chunk.ts:1](https://github.com/preco21/ts-snippets/blob/0c0e4d3/src/array-chunk.ts#L1)

___

### arrayMove

▸ **arrayMove**<`T`\>(`input`, `rangeOrIndex`, `insertIndex`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |
| `rangeOrIndex` | `number` \| [`number`, `number`] |
| `insertIndex` | `number` |

#### Returns

`T`[]

#### Defined in

[array-move.ts:1](https://github.com/preco21/ts-snippets/blob/0c0e4d3/src/array-move.ts#L1)

___

### deepEqual

▸ **deepEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `unknown` |
| `b` | `unknown` |

#### Returns

`boolean`

#### Defined in

[deep-equal.ts:1](https://github.com/preco21/ts-snippets/blob/0c0e4d3/src/deep-equal.ts#L1)

___

### generateId

▸ **generateId**(): `number`

#### Returns

`number`

#### Defined in

[generate-id.ts:1](https://github.com/preco21/ts-snippets/blob/0c0e4d3/src/generate-id.ts#L1)

___

### shallowEqual

▸ **shallowEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `unknown` |
| `b` | `unknown` |

#### Returns

`boolean`

#### Defined in

[shallow-equal.ts:1](https://github.com/preco21/ts-snippets/blob/0c0e4d3/src/shallow-equal.ts#L1)
