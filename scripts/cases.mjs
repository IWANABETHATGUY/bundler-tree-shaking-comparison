// Single source of truth for the tree-shaking comparison.
//
// Each case maps a package (under packages/<id>) to its README section and the
// set of unique string markers that MUST disappear from a bundler's (minified)
// output for that bundler to be considered `success`. A bundler is `success`
// for a case iff ALL of the case's markers are absent.
//
// Markers are injected as the *values* of the dead exports in packages/<id>/src
// (e.g. `export const bar = "__SHAKE__<id>__bar__"`). Minifiers never rewrite
// string-literal contents, so `output.includes(marker)` is a collision-proof
// test of whether the dead code was eliminated. Keep this file in sync with the
// fixtures: the marker strings here must match the ones in src exactly.

export const BUNDLERS = [
  { key: "esbuild", label: "esbuild", distDir: "esbuild-dist" },
  { key: "webpack", label: "webpack", distDir: "webpack-dist" },
  { key: "parcel", label: "parcel", distDir: "parcel-dist" },
  { key: "rolldown", label: "rolldown", distDir: "rolldown-dist" },
];

// Order here is the order sections appear in README.md.
export const CASES = [
  {
    id: "basic",
    title: "basic",
    markers: ["__SHAKE__basic__b__"],
  },
  {
    id: "basic-with-inner-ref",
    title: "basic with inner module ref",
    markers: ["__SHAKE__basic_with_inner_ref__b__"],
  },
  {
    id: "barrel-exports-optimization",
    title: "barrel exports optimization",
    markers: ["__SHAKE__barrel_exports_optimization__bar__"],
  },
  {
    id: "barrel-exports-optimization-with-namespace-ref",
    title: "Nested barrel exports optimization",
    markers: [
      "__SHAKE__barrel_exports_optimization_with_namespace_ref__bar__",
      "__SHAKE__barrel_exports_optimization_with_namespace_ref__c__",
    ],
  },
  {
    id: "promise-then-namespace",
    title: "promise then namespace",
    markers: [
      "__SHAKE__promise_then_namespace__bar__",
      "__SHAKE__promise_then_namespace__c__",
    ],
  },
  {
    id: "promise-then-destruct",
    title: "promise then destruct",
    markers: [
      "__SHAKE__promise_then_destruct__bar__",
      "__SHAKE__promise_then_destruct__c__",
    ],
  },
  {
    id: "dynamic-import-await-namespace",
    title: "await dynamic import namespace",
    markers: [
      "__SHAKE__dynamic_import_await_namespace__foo__",
      "__SHAKE__dynamic_import_await_namespace__c__",
    ],
  },
  {
    id: "dynamic-import-await-destruct",
    title: "await dynamic import destruct",
    markers: [
      "__SHAKE__dynamic_import_await_destruct__foo__",
      "__SHAKE__dynamic_import_await_destruct__c__",
    ],
  },
  {
    id: "interop-esm-commonjs",
    title: "Interop esm <- commonjs",
    markers: ["__SHAKE__interop_esm_commonjs__a__"],
  },
  {
    id: "interop-commonjs-commonjs",
    title: "commonjs <- commonjs",
    markers: ["__SHAKE__interop_commonjs_commonjs__a__"],
  },
  {
    id: "interop-commonjs-esm",
    title: "Interop commonjs <- esm",
    markers: ["__SHAKE__interop_commonjs_esm__b__"],
  },
  {
    id: "side-effects",
    title: "Side effects",
    markers: ["__SHAKE__side_effects__bar__", "__SHAKE__side_effects__c__"],
  },
  {
    id: "side-effects-pure-annotation",
    title: "Side effects pure annotation",
    markers: [
      "__SHAKE__side_effects_pure_annotation__bar__",
      "__SHAKE__side_effects_pure_annotation__c__",
    ],
  },
];
