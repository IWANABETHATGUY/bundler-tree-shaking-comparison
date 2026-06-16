
// b.js
export const c = "__SHAKE__side_effects_pure_annotation__c__";

function test() {
  console.log(`c: `, c)
}


/* @__PURE__*/test();
