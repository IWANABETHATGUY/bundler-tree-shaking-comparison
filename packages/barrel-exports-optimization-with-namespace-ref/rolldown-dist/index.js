
//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};

//#endregion
//#region src/a.js
var a_ns = {};
__export(a_ns, {foo: () => foo});
const foo = 100;

//#endregion
//#region src/lib.js
var lib_ns = {};
__export(lib_ns, {amodule: () => a_ns});

//#endregion
//#region src/index.js
console.log(lib_ns.amodule.foo);

//#endregion