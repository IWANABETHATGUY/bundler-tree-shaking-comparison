(() => {
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
  var foo = 100;
  var bar = 100;

  // src/index.js
  console.log(a_exports.foo);
})();
