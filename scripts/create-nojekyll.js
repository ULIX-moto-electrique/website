import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
const filePath = join(process.cwd(), 'dist', '.nojekyll');
try {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, '');
  console.log('Created', filePath);
} catch (err) {
  console.error('Failed to create .nojekyll', err);
  process.exit(1);
}
