const fs = require('fs');
let c = fs.readFileSync('src/app/App.tsx', 'utf8');

c = c.replace(/style=\{\{\s*fontFamily:\s*"'Roboto Slab', serif"\s*\}\}/g, '');
c = c.replace(/,\s*fontFamily:\s*"'DM Mono', monospace"/g, '');
c = c.replace(/fontFamily:\s*"'DM Mono', monospace",\s*/g, '');
c = c.replace(/style=\{\{\s*fontFamily:\s*"'DM Mono', monospace"\s*\}\}/g, '');
c = c.replace(/,\s*fontFamily:\s*"'Roboto Slab', serif"/g, '');
c = c.replace(/fontFamily:\s*"'Roboto Slab', serif",\s*/g, '');

fs.writeFileSync('src/app/App.tsx', c);
