const fs = require('fs');
const path = require('path');

const cssRoot = path.join(__dirname, '..', 'css');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.css') && !entry.name.endsWith('.min.css')) {
      files.push(fullPath);
    }
  }

  return files;
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

for (const file of walk(cssRoot)) {
  const source = fs.readFileSync(file, 'utf8');
  const minified = minifyCss(source);
  const outputFile = file.replace(/\.css$/, '.min.css');
  fs.writeFileSync(outputFile, `${minified}\n`);
  console.log(`Wrote ${path.relative(path.join(__dirname, '..'), outputFile)}`);
}
