
//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', {value: true}), mod);

//#endregion
//#region src/lib.js
var lib_ns, a, b;
var init_lib = __esmMin(() => {
	lib_ns = {};
	__export(lib_ns, {
		a: () => a,
		b: () => b
	});
	a = 3;
	b = 1000;
});

//#endregion
//#region src/index.js
const lib = (init_lib(), __toCommonJS(lib_ns));
console.log(`lib.bar: `, lib.a);

//#endregion