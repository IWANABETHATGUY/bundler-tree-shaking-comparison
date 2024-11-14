# Result

 > [!Note]
 > Due to the code elimination implementation, some bundlers need pass the processed code to `minifier` (like `webpack`, `parcel`) to apply the elimination,
 > We consider the result successful if the target declaration/function is eliminated after being passed into the minifier.

## basic

```javascript
// index.js
import {a, b} from './a.js'
a

// a.js
export function a() {}
export function b() {}
```

**Expected**
1. `b` in `a.js` should be eliminated.

**Actual**

| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | success |        |
| webpack  | success |        |
| parcel   | success |        |
| rolldown | success |        |

## basic with inner module ref

```javascript
// index.js
import {foo, bar} from './lib.js'
foo

// lib.js
import {a, b} from './a.js'
export function foo() {
  a
}
export function bar() {
  b
}

// a.js
export const a = 1
export const b = 2
```

**Expected**

1. `bar` in **lib.js** should be eliminated, `b` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | success |        |
| webpack  | success |        |
| parcel   | success |        |
| rolldown | success |        |

## barrel exports optimization

```javascript
// index.js
import {foo, bar} from './lib.js'
console.log(foo)

// lib.js
export * from './a.js'

// a.js
export const foo = 100;
export const bar = 100;
```

**Expected**

1. **lib.js** should be removed
2. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | success |        |
| webpack  | success |        |
| parcel   | success |        |
| rolldown | success |        |

## Nested barrel exports optimization

```js
// index.js
import * as lib from './lib.js'
console.log(lib.amodule.foo)

// lib.js
export * as amodule from './a.js'
export * as bmodule from './b.js'
// a.js
export const foo = 100;
export const bar = 100;

// b.js
export const c = 100;
```

**Expected**

1. **lib.js** should be removed
2. **b.js** should be removed
3. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | failed  |        |
| webpack  | success |        |
| parcel   | failed  |        |
| rolldown | success  |        |

## promise then namespace

```js
// index.js
import('./lib.js').then(module => {
	console.log(module.foo)
})

// lib.js
export * from './a.js'
export * from './b.js'
// a.js
export const foo = 100;
export const bar = 100;

// b.js
export const c = 100;
```

**Expected**

1. **lib.js** should be removed
2. **b.js** should be removed
3. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | failed  |        |
| webpack  | failed  |        |
| parcel   | success |        |
| rolldown | success  |        |


## promise then destruct

```js
// index.js
import('./lib.js').then(({foo}) => {
	console.log(foo)
})

// lib.js
export * from './a.js'
export * from './b.js'
// a.js
export const foo = 100;
export const bar = 100;

// b.js
export const c = 100;
```

**Expected**

1. **lib.js** should be removed
2. **b.js** should be removed
3. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | failed  |        |
| webpack  | failed  |        |
| parcel   | success |        |
| rolldown | success  |        |

## await dynamic import namespace

```js
// index.js
const m = await import("./lib.js")
console.log(m.foo)

// lib.js
export * from './a.js'
export * from './b.js'
// a.js
export const foo = 100;
export const bar = 100;

// b.js
export const c = 100;
```

**Expected**

1. **b.js** should be removed
2. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | failed  |        |
| webpack  | success  |        |
| parcel   | success |        |
| rolldown | success  |        |

## await dynamic import destruct

```js
// index.js
const {foo} = await import("./lib.js")
console.log(foo)

// lib.js
export * from './a.js'
export * from './b.js'
// a.js
export const foo = 100;
export const bar = 100;

// b.js
export const c = 100;
```

**Expected**

1. **b.js** should be removed
2. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | failed  |        |
| webpack  | failed  |        |
| parcel   | success |        |
| rolldown | success  |        |

## Interop esm <- commonjs

```js
// index.js

import * as lib from './lib.js'

console.log(`lib.bar: `, lib.bar)

// lib.js
const a = 3;
const b = 1000;
exports.a = a;
exports.bar = b;


```

**Expected**

1. `a` in **lib.js** should be eliminated

**Actual**
| Title    | Status  | remark                |
| -------- | ------- | --------------------- |
| esbuild  | failed  |                       |
| webpack  | success |                       |
| parcel   | success |                       |
| rolldown | failed  |                       |



## commonjs <- commonjs

```js
// index.js
//
const lib = require('./lib')

console.log(`lib.bar: `, lib.bar)

// lib.js
const a = 3;
const b = 1000;
exports.a = a;
exports.bar = b;


```

**Expected**

1. `a` in **lib.js** should be eliminated

**Actual**
| Title    | Status  | remark                |
| -------- | ------- | --------------------- |
| esbuild  | failed  |                       |
| webpack  | failed  |                       |
| parcel   | success |                       |
| rolldown | failed  |                       |



## Interop commonjs <- esm

```js
// index.js
//
const lib = require('./lib')

console.log(`lib.bar: `, lib.a)

// lib.js
export const a = 3;
export const b = 1000;


```

**Expected**

1. `b` in **lib.js** should be eliminated

**Actual**
| Title    | Status  | remark                |
| -------- | ------- | --------------------- |
| esbuild  | failed  |                       |
| webpack  | failed  |                       |
| parcel   | success |                       |
| rolldown | failed  |                       |

## Side effects

```js
// index.js
import {foo, bar} from './lib.js'
console.log(foo)

// lib.js
export * from './a.js'
export * from './b.js'

// a.js
export const foo = 100;
export const bar = 100;


// b.js
export const c = 100;

function test() {}

// package.json
{
  "sideEffects": ["./src/a.js"]
}
```
**Expected**
1. **lib.js** should be removed
2. **b.js** should be removed
3. `bar` in **a.js** should be eliminated

**Actual**
| Title    | Status  | remark |
| -------- | ------- | ------ |
| esbuild  | success  |        |
| webpack  | success |        |
| parcel   | success |        |
| rolldown | success  |        |
