const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const enIndex = path.join(outDir, "en", "index.html");
const rootIndex = path.join(outDir, "index.html");

if (!fs.existsSync(enIndex)) {
  console.error("scripts/redirect-index.js: out/en/index.html not found. Run after next build.");
  process.exit(1);
}

fs.copyFileSync(enIndex, rootIndex);
console.log("Root index.html now serves /en content (no redirect).");
