var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/lib.js
var require_lib = __commonJS({
  "src/lib.js"(exports) {
    var a = 3;
    var b = 1e3;
    exports.a = a;
    exports.bar = b;
  }
});

// src/index.js
var lib = require_lib();
console.log(`lib.bar: `, lib.bar);
