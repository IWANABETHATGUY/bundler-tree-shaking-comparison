# Result

> [!Note]
> Due to the code elimination implementation, some bundlers need pass the processed code to `minifier` (like `webpack`, `parcel`) to apply the elimination,
> We consider the result successful if the target declaration/function is eliminated after being passed into the minifier.

> [!Note]
> The status tables below are generated automatically by `scripts/update-readme.mjs`
> (run daily via GitHub Actions). Edit the prose freely, but leave the
> `<!-- status:<id>:start/end -->` markers in place — their contents are overwritten.

## basic

```javascript
// index.js
import { a, b } from "./a.js";
a;

// a.js
export function a() {}
export function b() {}
```

**Expected**

1. `b` in `a.js` should be eliminated.

**Actual**

<!-- status:basic:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | success |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:basic:end -->

## basic with inner module ref

```javascript
// index.js
import { foo, bar } from "./lib.js";
foo;

// lib.js
import { a, b } from "./a.js";
export function foo() {
  a;
}
export function bar() {
  b;
}

// a.js
export const a = 1;
export const b = 2;
```

**Expected**

1. `bar` in **lib.js** should be eliminated, `b` in **a.js** should be eliminated

**Actual**

<!-- status:basic-with-inner-ref:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | success |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:basic-with-inner-ref:end -->

## barrel exports optimization

```javascript
// index.js
import { foo, bar } from "./lib.js";
console.log(foo);

// lib.js
export * from "./a.js";

// a.js
export const foo = 100;
export const bar = 100;
```

**Expected**

1. **lib.js** should be removed
2. `bar` in **a.js** should be eliminated

**Actual**

<!-- status:barrel-exports-optimization:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | success |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:barrel-exports-optimization:end -->

## Nested barrel exports optimization

```js
// index.js
import * as lib from "./lib.js";
console.log(lib.amodule.foo);

// lib.js
export * as amodule from "./a.js";
export * as bmodule from "./b.js";
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

<!-- status:barrel-exports-optimization-with-namespace-ref:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | failed  |
| rolldown | success |

<!-- status:barrel-exports-optimization-with-namespace-ref:end -->

## promise then namespace

```js
// index.js
import("./lib.js").then((module) => {
  console.log(module.foo);
});

// lib.js
export * from "./a.js";
export * from "./b.js";
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

<!-- status:promise-then-namespace:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:promise-then-namespace:end -->

## promise then destruct

```js
// index.js
import("./lib.js").then(({ foo }) => {
  console.log(foo);
});

// lib.js
export * from "./a.js";
export * from "./b.js";
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

<!-- status:promise-then-destruct:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:promise-then-destruct:end -->

## await dynamic import namespace

```js
// index.js
const m = await import("./lib.js");
console.log(m.foo);

// lib.js
export * from "./a.js";
export * from "./b.js";
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

<!-- status:dynamic-import-await-namespace:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:dynamic-import-await-namespace:end -->

## await dynamic import destruct

```js
// index.js
const { foo } = await import("./lib.js");
console.log(foo);

// lib.js
export * from "./a.js";
export * from "./b.js";
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

<!-- status:dynamic-import-await-destruct:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:dynamic-import-await-destruct:end -->

## Interop esm <- commonjs

```js
// index.js

import * as lib from "./lib.js";

console.log(`lib.bar: `, lib.bar);

// lib.js
const a = 3;
const b = 1000;
exports.a = a;
exports.bar = b;
```

**Expected**

1. `a` in **lib.js** should be eliminated

**Actual**

<!-- status:interop-esm-commonjs:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:interop-esm-commonjs:end -->

## commonjs <- commonjs

```js
// index.js
//
const lib = require("./lib");

console.log(`lib.bar: `, lib.bar);

// lib.js
const a = 3;
const b = 1000;
exports.a = a;
exports.bar = b;
```

**Expected**

1. `a` in **lib.js** should be eliminated

**Actual**

<!-- status:interop-commonjs-commonjs:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | failed  |

<!-- status:interop-commonjs-commonjs:end -->

## Interop commonjs <- esm

```js
// index.js
//
const lib = require("./lib");

console.log(`lib.bar: `, lib.a);

// lib.js
export const a = 3;
export const b = 1000;
```

**Expected**

1. `b` in **lib.js** should be eliminated

**Actual**

<!-- status:interop-commonjs-esm:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | failed  |
| webpack  | success |
| parcel   | success |
| rolldown | failed  |

<!-- status:interop-commonjs-esm:end -->

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

<!-- status:side-effects:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | success |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:side-effects:end -->

## Side effects pure annotation

```js
// index.js
import { foo, bar } from "./lib.js";
console.log(foo);

// lib.js
export * from "./a.js";
export * from "./b.js";

// a.js
export const foo = 100;
export const bar = 100;

// b.js
export const c = 100;

function test() {
  console.log(`c: `, c);
}

/* @__PURE__*/ test();
```

**Expected**

1. **lib.js** should be removed
2. **b.js** should be removed (its only side effect is a `/* @__PURE__ */`-annotated call)
3. `bar` in **a.js** should be eliminated

**Actual**

<!-- status:side-effects-pure-annotation:start -->

| Title    | Status  |
| -------- | ------- |
| esbuild  | success |
| webpack  | success |
| parcel   | success |
| rolldown | success |

<!-- status:side-effects-pure-annotation:end -->
