
//#region rolldown:runtime
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

//#endregion
//#region src/lib.js
var require_lib = __commonJSMin((exports, module) => {
	const a = 3;
	const b = 1000;
	exports.a = a;
	exports.bar = b;
});

//#endregion
export default require_lib();
