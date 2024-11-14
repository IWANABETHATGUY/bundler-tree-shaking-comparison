var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/a.js
var a_exports = {};
__export(a_exports, {
  bar: () => bar,
  foo: () => foo
});
var foo = "a_foo";
var bar = "a_bar";

// src/index.js
console.log(a_exports.foo);
