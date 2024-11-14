
//#region rolldown:runtime
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

//#endregion
//#region src/lib.js
var require_lib = __commonJS({ "src/lib.js"(exports) {
	const a = 3;
	const b = 1e3;
	exports.a = a;
	exports.bar = b;
} });

//#endregion
//#region src/index.js
const lib = require_lib();
console.log(`lib.bar: `, lib.bar);

//#endregion