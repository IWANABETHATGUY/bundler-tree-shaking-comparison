// Computes each bundler's tree-shaking status for every case and rewrites the
// status tables in README.md (between `<!-- status:<id>:start/end -->` anchors).
//
// How a status is decided (matches the README methodology):
//   1. Concatenate every JS file a bundler emitted into <bundler>-dist.
//   2. Minify it (terser) — webpack/parcel only drop dead code after a minifier
//      runs; esbuild/rolldown already dropped it during bundling. terser's
//      `compress` removes unused declarations (esbuild's minifier does not).
//   3. A case marker that is absent from the minified output means that dead
//      code was eliminated. A bundler is `success` iff ALL of the case's markers
//      are gone, else `failed`.
//
// Usage:
//   node scripts/update-readme.mjs            # rewrite README.md
//   node scripts/update-readme.mjs --build    # `pnpm run -r build` first
//   node scripts/update-readme.mjs --check    # exit 1 if README would change (no write)

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prettier from "prettier";
import { minify } from "terser";

import { BUNDLERS, CASES } from "./cases.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const README = path.join(ROOT, "README.md");

const args = new Set(process.argv.slice(2));
const DO_BUILD = args.has("--build");
const CHECK_ONLY = args.has("--check");

/** Read and minify every JS file in a dist dir into one string. */
async function readMinifiedDist(distPath) {
  if (!fs.existsSync(distPath)) return null;
  const files = fs
    .readdirSync(distPath, { withFileTypes: true })
    .filter((d) => d.isFile() && /\.(js|mjs|cjs)$/.test(d.name))
    .map((d) => path.join(distPath, d.name));
  if (files.length === 0) return null;

  let out = "";
  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    try {
      const res = await minify(raw, {
        compress: true,
        mangle: false,
        module: true,
      });
      out += (res.code ?? raw) + "\n";
    } catch {
      // Some chunk shapes can't be re-minified standalone. Falling back to the
      // raw text is safe: esbuild/rolldown already eliminate dead code during
      // bundling (so the marker is already absent), and only webpack/parcel rely
      // on the minify pass — their outputs minify cleanly.
      out += raw + "\n";
    }
  }
  return out;
}

/** Returns { esbuild: "success"|"failed", ... } for one case. */
async function evaluateCase(c) {
  const result = {};
  for (const bundler of BUNDLERS) {
    const distPath = path.join(ROOT, "packages", c.id, bundler.distDir);
    const code = await readMinifiedDist(distPath);
    if (code == null) {
      console.warn(
        `[warn] ${c.id}: no output in ${bundler.distDir} — marking failed`,
      );
      result[bundler.key] = "failed";
      continue;
    }
    const eliminated = c.markers.every((m) => !code.includes(m));
    result[bundler.key] = eliminated ? "success" : "failed";
  }
  return result;
}

function renderTable(statuses) {
  const lines = [
    "| Title | Status |",
    "| -------- | ------- |",
    ...BUNDLERS.map((b) => `| ${b.label} | ${statuses[b.key]} |`),
  ];
  return lines.join("\n");
}

function spliceTable(content, id, table) {
  const start = `<!-- status:${id}:start -->`;
  const end = `<!-- status:${id}:end -->`;
  const startIdx = content.indexOf(start);
  const endIdx = content.indexOf(end);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `Missing status anchors for "${id}" in README.md. ` +
        `Expected "${start}" ... "${end}".`,
    );
  }
  return (
    content.slice(0, startIdx) +
    start +
    "\n" +
    table +
    "\n" +
    content.slice(endIdx)
  );
}

function printSummary(rows) {
  const header = ["case", ...BUNDLERS.map((b) => b.label)];
  console.log(header.join("\t"));
  for (const { id, statuses } of rows) {
    console.log([id, ...BUNDLERS.map((b) => statuses[b.key])].join("\t"));
  }
}

async function main() {
  if (DO_BUILD) {
    console.log("Building all packages (pnpm run -r build)...");
    execSync("pnpm run -r build", { cwd: ROOT, stdio: "inherit" });
  }

  let content = fs.readFileSync(README, "utf8");
  const rows = [];
  for (const c of CASES) {
    const statuses = await evaluateCase(c);
    rows.push({ id: c.id, statuses });
    content = spliceTable(content, c.id, renderTable(statuses));
  }

  const prettierOptions = (await prettier.resolveConfig(README)) ?? {};
  content = await prettier.format(content, {
    ...prettierOptions,
    parser: "markdown",
  });

  printSummary(rows);

  const current = fs.readFileSync(README, "utf8");
  if (content === current) {
    console.log("\nREADME.md is up to date.");
    return;
  }

  if (CHECK_ONLY) {
    console.error(
      "\nREADME.md is out of date. Run `node scripts/update-readme.mjs` to update it.",
    );
    process.exit(1);
  }

  fs.writeFileSync(README, content);
  console.log("\nREADME.md updated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
