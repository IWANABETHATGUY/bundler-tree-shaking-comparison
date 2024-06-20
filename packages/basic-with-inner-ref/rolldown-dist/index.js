
//#region src/a.js
const a = 1;

//#endregion
//#region src/lib.js
function foo() {
	a;
}

//#endregion
//#region src/index.js
console.log(`foo: `, foo);

//#endregion