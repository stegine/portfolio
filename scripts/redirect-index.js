const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const enPage = path.join(outDir, "en.html");
const rootIndex = path.join(outDir, "index.html");

if (!fs.existsSync(enPage)) {
  console.error("scripts/redirect-index.js: out/en.html not found. Run after next build.");
  process.exit(1);
}

fs.copyFileSync(enPage, rootIndex);
console.log("Root index.html now serves /en content (no redirect).");
