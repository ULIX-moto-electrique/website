const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'dist', '.nojekyll');
try {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, '');
  console.log('Created', filePath);
} catch (err) {
  console.error('Failed to create .nojekyll', err);
  process.exit(1);
}
