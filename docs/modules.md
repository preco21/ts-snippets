# ts-snippets

## Table of contents

### Functions

- [arrayChunk](modules.md#arraychunk)
- [arrayMove](modules.md#arraymove)
- [arrayNearestOffset](modules.md#arraynearestoffset)
- [arrayShuffle](modules.md#arrayshuffle)
- [arrayShuffleWithRepetition](modules.md#arrayshufflewithrepetition)
- [arrayTraverseDiagonal](modules.md#arraytraversediagonal)
- [binarySearch](modules.md#binarysearch)
- [chunkStringNatural](modules.md#chunkstringnatural)
- [clearModuleCache](modules.md#clearmodulecache)
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

[array-chunk.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/array-chunk.ts#L1)

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

[array-move.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/array-move.ts#L1)

___

### arrayNearestOffset

▸ **arrayNearestOffset**<`T`\>(`array`, `index`, `predicate`, `direction?`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | `T`[] | `undefined` |
| `index` | `number` | `undefined` |
| `predicate` | (`element`: `T`, `index`: `number`) => `boolean` | `undefined` |
| `direction` | `number` | `-1` |

#### Returns

`number`

#### Defined in

[array-nearest-offset.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/array-nearest-offset.ts#L1)

___

### arrayShuffle

▸ **arrayShuffle**<`T`\>(`input`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |

#### Returns

`T`[]

#### Defined in

[array-shuffle.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/array-shuffle.ts#L1)

___

### arrayShuffleWithRepetition

▸ **arrayShuffleWithRepetition**<`T`\>(`input`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |

#### Returns

`T`[]

#### Defined in

[array-shuffle.ts:9](https://github.com/preco21/ts-snippets/blob/19e9649/src/array-shuffle.ts#L9)

___

### arrayTraverseDiagonal

▸ **arrayTraverseDiagonal**<`T`\>(`input`): `T`[][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[][] |

#### Returns

`T`[][]

#### Defined in

[array-traverse-diagonal.ts:10](https://github.com/preco21/ts-snippets/blob/19e9649/src/array-traverse-diagonal.ts#L10)

___

### binarySearch

▸ **binarySearch**(`input`, `target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `number`[] |
| `target` | `number` |

#### Returns

`number`

#### Defined in

[binary-search.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/binary-search.ts#L1)

___

### chunkStringNatural

▸ **chunkStringNatural**(`input`, `perPage?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `perPage` | `number` | `800` |

#### Returns

`string`[]

#### Defined in

[chunk-string-natural.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/chunk-string-natural.ts#L1)

___

### clearModuleCache

▸ **clearModuleCache**(`moduleId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`void`

#### Defined in

[clear-module-cache.ts:2](https://github.com/preco21/ts-snippets/blob/19e9649/src/clear-module-cache.ts#L2)

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

[deep-equal.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/deep-equal.ts#L1)

___

### generateId

▸ **generateId**(): `number`

#### Returns

`number`

#### Defined in

[generate-id.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/generate-id.ts#L1)

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

[shallow-equal.ts:1](https://github.com/preco21/ts-snippets/blob/19e9649/src/shallow-equal.ts#L1)
