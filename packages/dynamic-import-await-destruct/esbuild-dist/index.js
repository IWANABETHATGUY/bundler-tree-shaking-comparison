var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/a.js
var foo, bar;
var init_a = __esm({
  "src/a.js"() {
    foo = "foo";
    bar = "bar";
  }
});

// src/b.js
var c;
var init_b = __esm({
  "src/b.js"() {
    c = "c";
  }
});

// src/lib.js
var lib_exports = {};
__export(lib_exports, {
  bar: () => bar,
  c: () => c,
  foo: () => foo
});
var init_lib = __esm({
  "src/lib.js"() {
    init_a();
    init_b();
  }
});

// src/index.js
var { bar: bar2 } = await Promise.resolve().then(() => (init_lib(), lib_exports));
console.log(`bar: `, bar2);
