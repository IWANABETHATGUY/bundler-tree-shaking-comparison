(() => {
  // src/a.js
  var a = 1;

  // src/lib.js
  function foo() {
    a;
  }

  // src/index.js
  console.log(`foo: `, foo);
})();
