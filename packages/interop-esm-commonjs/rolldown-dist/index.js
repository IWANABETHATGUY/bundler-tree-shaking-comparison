
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === 'object' || typeof from === 'function') for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region src/lib.js
var require_lib = __commonJSMin((exports, module) => {
	const a = 3;
	const b = 1000;
	exports.a = a;
	exports.bar = b;
});

//#endregion
//#region src/index.js
var import_lib = __toESM(require_lib());
console.log(`lib.bar: `, import_lib.bar);

//#endregion