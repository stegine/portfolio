const fs = require("fs");
const path = require("path");

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const defaultLocale = "en";
const redirectUrl = `${basePath}/${defaultLocale}`;

const html = `<!DOCTYPE html>
<html lang="${defaultLocale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="refresh" content="0;url=${redirectUrl}" />
  <title>Redirect…</title>
  <link rel="canonical" href="${redirectUrl}" />
</head>
<body>
  <p><a href="${redirectUrl}">Continue</a></p>
</body>
</html>
`;

const outDir = path.join(process.cwd(), "out");
const outFile = path.join(outDir, "index.html");

if (!fs.existsSync(outDir)) {
  console.error("scripts/redirect-index.js: out/ not found. Run after next build.");
  process.exit(1);
}

fs.writeFileSync(outFile, html, "utf-8");
console.log("Wrote redirect index.html ->", redirectUrl);
